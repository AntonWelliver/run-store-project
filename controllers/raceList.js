const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async.js');
const Race = require('../models/Race')

//Getting All
exports.getAllRaces = asyncHandler(async (req, res, next) => {
    const raceList = await Race.find()
    res
        .status(200)
        .json({ success: true, count: raceList.length, raceList });
});

//Getting One
exports.getSingleRace = asyncHandler(async (req, res, next) => {
    const race = await Race.findById(req.params.id);

    if (!race) {
        return next(
            new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
        );
    }
    res.status(200).json({ success: true, race });
});

//Creating One
exports.createRace = asyncHandler(async (req, res, next) => {
    const newRace = await Race.create(req.body)
    res
        .status(200)
        .json({ success: true, newRace });
});

//Updating One
exports.updateRace = asyncHandler(async (req, res, next) => {
    let race = null;
    race = await Race.findById(req.params.id);

    if (!race) {
        return next(
            new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
        );
    };
    const updatedRace = await Race.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );
    res.status(200).json({ success: true, updatedRace });
});

//Deleting One
exports.deleteRace = asyncHandler(async (req, res, next) => {
    let race = null;
    race = await Race.findById(req.params.id);

    if (!race) {
        return next(
            new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
        );
    };
    await race.remove();
    res.status(200).json({ success: true });
});
