import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RaceHandlerContext from '../../context/raceHandler/raceHandlerContext';

const FeaturedRaceItem = ({ race }) => {
    const raceHandlerContext = useContext(RaceHandlerContext);
    const { setSelectedRace } = raceHandlerContext;
    const { message1, message2, message3 } = race;
    const onClick = () => {
        setSelectedRace(race);
    }
    return (
        <div className='card bg-light'>
            <h1 className='text-danger text-center lead'>New Information!</h1>
            <h1 className='text-primary text-center'>
                {message1}
            </h1>
            <h2 className='text-primary'>
                {message2}
            </h2>
            <h2 className='text-primary'>
                {message3}
            </h2>
            <p>
                <Link
                    to='/races'
                    className='btn btn-lg'
                    style={btnStyle}
                    onClick={onClick}
                >
                    Sign up now!
                </Link>
            </p>
        </div>
    );
};

const btnStyle = {
    color: 'black',
    background: '#ffffc0',
    border: '2px solid black',
    borderRadius: '8px'
};

FeaturedRaceItem.propTypes = {
    race: PropTypes.object.isRequired
};

export default FeaturedRaceItem;
