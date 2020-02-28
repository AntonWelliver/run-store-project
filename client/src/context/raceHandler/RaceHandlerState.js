import React, { useReducer } from 'react';
import uuid from 'uuid';
import RaceHandlerContext from './raceHandlerContext';
import raceHandlerReducer from './raceHandlerReducer';
import {
    GET_FEATURED_RACE,
    SET_SELECTED_RACE,
    CLEAR_SELECTED_RACE,
    ADD_RACE,
    DELETE_RACE,
    SET_CURRENT_RACE,
    CLEAR_CURRENT_RACE,
    UPDATE_RACE
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
                info1: "Välkomna till Vårloppet 5km!",
                info2: "Var: Göteborg",
                info3: "När: 12/4",
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
                info1: "Välkomna till Sommarloppet 10km!",
                info2: "Var: Stockholm",
                info3: "När: 12/6",
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
                info1: "Välkomna till Höstlopept 2km!",
                info2: "Var: Malmö",
                info3: "När: 12/9",
                show: "no",
                price: 100
            }
        ],
        selectedRace: null,
        raceArchive: [],
        currentRace: null
    };

    const [state, dispatch] = useReducer(raceHandlerReducer, initialState);

    const addRace = race => {
        race.id = uuid.v4();
        dispatch({ type: ADD_RACE, payload: race });
    };

    const deleteRace = id => {
        dispatch({ type: DELETE_RACE, payload: id });
    };

    const setCurrentRace = race => {
        dispatch({ type: SET_CURRENT_RACE, payload: race });
    };

    const clearCurrentRace = () => {
        dispatch({ type: CLEAR_CURRENT_RACE });
    };

    const updateRace = race => {
        dispatch({ type: UPDATE_RACE, payload: race });
    };

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
                raceArchive: state.raceArchive,
                currentRace: state.currentRace,
                getFeaturedRace,
                setSelectedRace,
                clearSelectedRace,
                addRace,
                deleteRace,
                setCurrentRace,
                clearCurrentRace,
                updateRace
            }}>
            {props.children}
        </RaceHandlerContext.Provider>
    );
};

export default RaceHandlerState;