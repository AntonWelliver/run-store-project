import { GET_FEATURED_RACE, SET_SELECTED_RACE, CLEAR_SELECTED_RACE } from '../typesLibrary';

export default (state, action) => {
    switch (action.type) {
        case GET_FEATURED_RACE:
            return {
                //Get current state
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