const express = require('express');
const {
    getAllRaces,
    createRace,
    getSingleRace,
    updateRace,
    deleteRace
} = require('../controllers/raceList');
const router = express.Router();

router
    .route('/')
    .get(getAllRaces)
    .post(createRace);

router
    .route('/:id')
    .get(getSingleRace)
    .put(updateRace)
    .delete(deleteRace);


module.exports = router