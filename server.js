require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Connect To Mongoose
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use(express.json({ extended: false }));

// Load Race Model
require('./models/Race');
const Race = mongoose.model('races');

// Set static folder
app.use(express.static('public'));

const informationRouter = require('./routes/information')
app.use('/information', informationRouter)

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});