import React, { Fragment, useContext, useEffect } from 'react';
import FeaturedRaceItem from './FeaturedRaceItem';
import RaceHandlerContext from '../../context/raceHandler/raceHandlerContext';

const FeaturedRace = () => {
    const raceHandlerContext = useContext(RaceHandlerContext);

    const { featuredRace, getFeaturedRace } = raceHandlerContext;

    useEffect(() => {
        getFeaturedRace();
    }, []);

    return (
        <Fragment>
            {featuredRace.map(race => (
                <FeaturedRaceItem key={race.id} race={race} />
            ))}
        </Fragment>
    )
}

export default FeaturedRace
