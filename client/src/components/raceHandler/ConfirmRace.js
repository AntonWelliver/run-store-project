import React, { useContext } from 'react';
/* import { useHistory } from 'react-router-dom'; */
import RaceHandlerContext from '../../context/raceHandler/raceHandlerContext';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const ConfirmRace = () => {
    const raceHandlerContext = useContext(RaceHandlerContext);
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    // const history = useHistory();

    const { selectedRace, clearSelectedRace, clearConfirmation, setRaceConfirmed } = raceHandlerContext;
    const { isAuthenticated } = authContext;
    const { setAlert } = alertContext;
    const cancelRegistration = () => {
        clearConfirmation();
        clearSelectedRace();
    };

    const confirmRace = () => {
        if (isAuthenticated) {
            setRaceConfirmed();
            // history.push('/race-checkout');
            setAlert('You are registered', 'success');
        } else {
            setAlert('Log in to signup for race', 'danger');
        }
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
            <button className='btn btn-success' onClick={confirmRace}>
                Confirm Registration
            </button>
            <button className='btn btn-danger' onClick={cancelRegistration}>
                Cancel
            </button>
        </div>
    );
};

export default ConfirmRace;
