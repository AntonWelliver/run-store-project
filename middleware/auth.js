const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  // Check headers if token is provided
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    console.log('check headers');
    token = req.headers.authorization.split(' ')[1];
  }
  /* for later
  else if ( req.cookies.token) {
    token = req.cookies.token;
  }
  */

  // Make sure token exists
  if (!token) {
    console.log('No token');
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  // Verify token
  try {
    console.log('Check token');
    // decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    // use id from token to access user in db
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    console.log('No match token vs db');
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
});

// Grant access to specific roles

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is not authorized to access this route`,
          403
        )
      );
    }
    next();
  };
};
