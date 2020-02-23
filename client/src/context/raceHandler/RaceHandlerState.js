import React, { useReducer } from 'react';
import RaceHandlerContext from './raceHandlerContext';
import raceHandlerReducer from './raceHandlerReducer';
import {
    GET_FEATURED_RACE
} from '../typesLibrary';

const RaceHandlerState = props => {
    const initialState = {
        featuredRace: [
            {
                id: 1,
                name: "Vårloppet 5km",
                distance: 5,
                date: "2020-04-12",
                time: "13:00",
                capacity: 100,
                entries: 100,
                location: "Göteborg",
                message1: "Välkomna till Vårloppet 5km!",
                message2: "Var: Göteborg",
                message3: "När: 12/4",
                show: "yes",
                price: 100
            }
        ],
        availableRaces: [
            {
                id: 1,
                name: "Vårloppet 5km",
                distance: 5,
                date: "2020-04-12",
                time: "13:00",
                capacity: 100,
                entries: 100,
                location: "Göteborg",
                message1: "Välkomna till Vårloppet 5km!",
                message2: "Var: Göteborg",
                message3: "När: 12/4",
                show: "yes",
                price: 100
            },
            {
                id: 2,
                name: "Sommarloppet 10km",
                distance: 10,
                date: "2020-06-12",
                time: "13:00",
                capacity: 100,
                entries: 100,
                location: "Stockholm",
                message1: "Välkomna till Sommarloppet 10km!",
                message2: "Var: Stockholm",
                message3: "När: 12/6",
                show: "no",
                price: 100
            },
            {
                id: 1,
                name: "Höstloppet 2km",
                distance: 2,
                date: "2020-09-12",
                time: "13:00",
                capacity: 100,
                entries: 100,
                location: "Malmö",
                message1: "Välkomna till Höstlopept 2km!",
                message2: "Var: Malmö",
                message3: "När: 12/9",
                show: "no",
                price: 100
            }
        ],
        selectedRace: null
    };

    const [state, dispatch] = useReducer(raceHandlerReducer, initialState);

    //Get Featured Races
    const getFeaturedRace = () => {
        dispatch({ type: GET_FEATURED_RACE });
    };

    return (
        <RaceHandlerContext.Provider
            value={{
                featuredRace: state.featuredRace,
                availableRaces: state.availableRaces,
                selectedRace: state.selectedRace,
                getFeaturedRace
            }}>
            {props.children}
        </RaceHandlerContext.Provider>
    );
};

export default RaceHandlerState;