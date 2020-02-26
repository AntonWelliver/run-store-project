import React from 'react';
import AvailableRaces from '../raceHandler/AvailableRaces';
import ConfirmRace from '../raceHandler/ConfirmRace';

const Races = () => {
    return (
        <div className='grid-2'>
            <div>
                <ConfirmRace />
            </div>
            <div>
                <AvailableRaces />
            </div>
        </div>
    );
};

export default Races;
