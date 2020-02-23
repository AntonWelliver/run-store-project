import { GET_FEATURED_RACE } from '../typesLibrary';

export default (state, action) => {
    switch (action.type) {
        case GET_FEATURED_RACE:
            return {
                //Get current state
                ...state,
                featuredRace: state.availableRaces.filter(race => race.show === 'yes')
            };
        default:
            return state;
    }
};