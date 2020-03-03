import React, { useContext, useEffect } from 'react';
import FeaturedRace from '../raceHandler/FeaturedRace';
import AuthContext from '../../context/auth/authContext';
import AuthState from '../../context/auth/AuthState';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="grid-2">
            <div>
                <FeaturedRace />
            </div>
        </div>
    )
}

export default Home;
