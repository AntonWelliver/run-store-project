import React, { useReducer } from 'react';
import uuid from 'uuid';
import ShopHandlerContext from './shopHandlerContext';
import shopHandlerReducer from './shopHandlerReducer';
import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    SET_CURRENT_PRODUCT,
    CLEAR_CURRENT_PRODUCT,
    UPDATE_PRODUCT
} from '../typesLibrary';

const ShopHandlerState = props => {
    const initialState = {
        availableProducts: [
            {
                _id: 1,
                name: "Run For Joy T-shirt White",
                price: 200,
                amount: 100,
                info: "100% cotton",
                size: ["S", "M", "L"]
            },
            {
                _id: 2,
                name: "Run For Joy Hoodie Black",
                price: 500,
                amount: 100,
                info: "100% cotton",
                size: ["S", "M", "L"]
            },
            {
                _id: 3,
                name: "Run For Joy Socks White",
                price: 100,
                amount: 100,
                info: "100% polyester",
                size: ["S", "M", "L"]
            },
            {
                _id: 4,
                name: "Run For Joy Waterbottle Blue",
                price: 30,
                amount: 100,
                info: "1 L",
                size: ["-"]
            }
        ],
        currentProduct: null
    };

    const [state, dispatch] = useReducer(shopHandlerReducer, initialState);

    const addProduct = product => {
        product._id = uuid.v4();
        dispatch({ type: ADD_PRODUCT, payload: product });
    };

    const deleteProduct = _id => {
        dispatch({ type: DELETE_PRODUCT, payload: _id });
    };

    const setCurrentProduct = product => {
        dispatch({ type: SET_CURRENT_PRODUCT, payload: product });
    };

    const clearCurrentProduct = () => {
        dispatch({ type: CLEAR_CURRENT_PRODUCT });
    };

    const updateProduct = product => {
        dispatch({ type: UPDATE_PRODUCT, payload: product });
    };

    return (
        <ShopHandlerContext.Provider
            value={{
                availableProducts: state.availableProducts,
                currentProduct: state.currentProduct,
                addProduct,
                deleteProduct,
                setCurrentProduct,
                clearCurrentProduct,
                updateProduct
            }}>
            {props.children}
        </ShopHandlerContext.Provider>
    );
};

export default ShopHandlerState;