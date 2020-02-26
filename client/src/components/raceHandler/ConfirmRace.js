import React, { useContext } from 'react';
import RaceHandlerContext from '../../context/raceHandler/raceHandlerContext';

const ConfirmRace = () => {
    const raceHandlerContext = useContext(RaceHandlerContext);
    const { selectedRace, clearSelectedRace } = raceHandlerContext;
    const cancelRegistration = () => {
        clearSelectedRace();
    };


    if (selectedRace === null) {
        return null;
    }

    const { name, price } = selectedRace;

    return (
        <div className='card bg-light'>
            <h2>Selected Race</h2>
            <h3 className='text-left'>
                {name}
            </h3>
            <ul>
                <li>
                    Price: {price} kr
                </li>
            </ul>
            <button className='btn btn-success'>
                Confirm Registration
            </button>
            <button className='btn btn-danger' onClick={cancelRegistration}>
                Cancel
            </button>
        </div>
    );
};

export default ConfirmRace;
