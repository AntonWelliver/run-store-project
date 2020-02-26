import React, { Fragment, useContext } from 'react';
import AvailableRaceItem from './AvailableRaceItem';
import RaceHandlerContext from '../../context/raceHandler/raceHandlerContext';

const AvailableRaces = () => {
    const raceHandlerContext = useContext(RaceHandlerContext);
    const { availableRaces } = raceHandlerContext;

    if (availableRaces.length === 0) {
        return (
            <Fragment>
                <h2>No races currently available</h2>
            </Fragment>
        );
    }

    return (
        <Fragment>
            {availableRaces.map(race => (
                <AvailableRaceItem key={race.id} race={race} />
            ))}
        </Fragment>
    );
};

export default AvailableRaces;
