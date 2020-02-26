import React, { useReducer } from 'react';
import RaceHandlerContext from './raceHandlerContext';
import raceHandlerReducer from './raceHandlerReducer';
import {
    GET_FEATURED_RACE,
    SET_SELECTED_RACE,
    CLEAR_SELECTED_RACE
} from '../typesLibrary';

const RaceHandlerState = props => {
    const initialState = {
        featuredRace: [],
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
                entries: 60,
                location: "Stockholm",
                message1: "Välkomna till Sommarloppet 10km!",
                message2: "Var: Stockholm",
                message3: "När: 12/6",
                show: "no",
                price: 100
            },
            {
                id: 3,
                name: "Höstloppet 2km",
                distance: 2,
                date: "2020-09-12",
                time: "13:00",
                capacity: 100,
                entries: 20,
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

    //Set Featured Races
    const setSelectedRace = race => {
        dispatch({ type: SET_SELECTED_RACE, payload: race });
    };

    //Get Featured Races
    const clearSelectedRace = () => {
        dispatch({ type: CLEAR_SELECTED_RACE });
    };

    return (
        <RaceHandlerContext.Provider
            value={{
                featuredRace: state.featuredRace,
                availableRaces: state.availableRaces,
                selectedRace: state.selectedRace,
                getFeaturedRace,
                setSelectedRace,
                clearSelectedRace
            }}>
            {props.children}
        </RaceHandlerContext.Provider>
    );
};

export default RaceHandlerState;