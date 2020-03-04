import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    SET_CURRENT_PRODUCT,
    CLEAR_CURRENT_PRODUCT,
    UPDATE_PRODUCT,
} from '../typesLibrary';

export default (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                availableProducts: [...state.availableProducts, action.payload]
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                availableProducts: state.availableProducts.filter(product => product._id !== action.payload)
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                availableProducts: state.availableProducts.map(product =>
                    product._id === action.payload._id ? action.payload : product
                )
            };
        case SET_CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct: action.payload
            };
        case CLEAR_CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct: null
            };
        default:
            return state;
    }
};