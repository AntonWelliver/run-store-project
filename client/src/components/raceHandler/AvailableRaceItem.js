import React, { useContext } from 'react';
import Proptypes from 'prop-types';
import RaceHandlerContext from '../../context/raceHandler/raceHandlerContext';

const AvailableRaceItem = ({ race }) => {
    const raceHandlerContext = useContext(RaceHandlerContext);
    const { setSelectedRace } = raceHandlerContext;
    const {
        name,
        date,
        distance,
        cost,
        capacity,
        entries,
        location,
        time
    } = race;
    const onClick = () => {
        setSelectedRace(race);
    };

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name} {distance} km
                <span
                    style={{ float: 'right' }}
                    className={
                        'badge ' +
                        (capacity - entries > 30 ? 'badge-success' : 'badge-danger')
                    }>
                    Availability: {capacity - entries} {'/'} {capacity}
                </span>
            </h3>
            <ul>
                <li>Location: {location}</li>
                <li>Date: {date} Time: {time}</li>
                <li>Entry fee: {cost} kr</li>
            </ul>
            <button className='btn btn-primary btn-sm' onClick={onClick}>
                Select Race
            </button>
        </div>
    );
};

AvailableRaceItem.propTypes = {
    race: Proptypes.object.isRequired
};

export default AvailableRaceItem;
