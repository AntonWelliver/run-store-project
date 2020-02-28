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

export default (state, action) => {
    switch (action.type) {
        case ADD_RACE:
            return {
                ...state,
                availableRaces: [...state.availableRaces, action.payload]
            };
        case DELETE_RACE:
            return {
                ...state,
                availableRaces: state.availableRaces.filter(race => race.id !== action.payload)
            };
        case UPDATE_RACE:
            return {
                ...state,
                availableRaces: state.availableRaces.map(race =>
                    race.id === action.payload.id ? action.payload : race
                )
            };
        case SET_CURRENT_RACE:
            return {
                ...state,
                currentRace: action.payload
            };
        case CLEAR_CURRENT_RACE:
            return {
                ...state,
                currentRace: null
            };
        case GET_FEATURED_RACE:
            return {
                //Get current race state
                ...state,
                featuredRace: state.availableRaces.filter(race => race.show === 'yes')
            };
        case SET_SELECTED_RACE:
            return {
                ...state,
                selectedRace: action.payload
            };
        case CLEAR_SELECTED_RACE:
            return {
                ...state,
                selectedRace: null
            };
        default:
            return state;
    }
};