import React, { useContext } from 'react';
import Proptypes from 'prop-types';
import RaceHandlerContext from '../../context/raceHandler/raceHandlerContext';

const AvailableRaceForAdminItem = ({ race }) => {
    const raceHandlerContext = useContext(RaceHandlerContext);

    const {
        id,
        name,
        distance,
        date,
        time,
        location,
        capacity,
        entries,
        price,
        info1,
        info2,
        info3,
        show
    } = race;

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}
                <span
                    style={{ float: 'right' }}
                    className={
                        'badge ' +
                        (capacity - entries > 30 ? 'badge-success' : 'badge-danger')
                    }>
                    Entries: {entries} {'/'} {capacity}
                </span>
                <span
                    style={{ float: 'right' }}
                    className={
                        'badge ' +
                        (show === 'yes' ? 'badge-success' : 'badge-danger')
                    }>
                    Show on frontpage: {show}
                </span>
            </h3>
            <ul>
                <li>Location: {location}</li>
                <li>Date: {date} Time: {time}</li>
                <li>Entry fee: {price} kr</li>
                <li>{info1}</li>
                <li>{info2}</li>
                <li>{info3}</li>
            </ul>
            <button className='btn btn-primary btn-sm'>
                Edit
            </button>
            <button className='btn btn-primary btn-sm'>
                Delete
            </button>
        </div>
    );
};

AvailableRaceForAdminItem.propTypes = {
    race: Proptypes.object.isRequired
};

export default AvailableRaceForAdminItem;
