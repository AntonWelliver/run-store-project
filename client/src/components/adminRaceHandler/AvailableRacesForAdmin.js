import React, { Fragment, useContext } from 'react';
import RaceHandlerContext from '../../context/raceHandler/raceHandlerContext';
import AvailableRaceForAdminItem from './AvailableRaceForAdminItem';

const AvailableRacesForAdmin = () => {
    const raceHandlerContext = useContext(RaceHandlerContext);
    const { availableRaces } = raceHandlerContext;

    if (availableRaces.length === 0) {
        return <h4>No races available</h4>;
    }

    return (
        <Fragment>
            {availableRaces.map(race => (
                <AvailableRaceForAdminItem key={race.id} race={race} />
            ))}
        </Fragment>
    );
};

export default AvailableRacesForAdmin;
