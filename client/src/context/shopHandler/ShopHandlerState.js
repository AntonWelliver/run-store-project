import React, { useReducer } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import ShopHandlerContext from './shopHandlerContext';
import shopHandlerReducer from './shopHandlerReducer';
import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    SET_CURRENT_PRODUCT,
    CLEAR_CURRENT_PRODUCT,
    UPDATE_PRODUCT,
    GET_PRODUCTS,
    PRODUCT_ERROR
} from '../typesLibrary';

const ShopHandlerState = props => {
    const initialState = {
        availableProducts: null,
        currentProduct: null,
        loading: true,
        error: null
    };

    const [state, dispatch] = useReducer(shopHandlerReducer, initialState);

    const addProduct = async product => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post('/api/v1/product-list', product, config);
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data.newProduct
            });
        } catch (err) {
            dispatch({ type: PRODUCT_ERROR, payload: err.response.data.error })
        }
    };

    const deleteProduct = async _id => {
        try {
            await axios.delete(`/api/v1/product-list/${_id}`);
            dispatch({
                type: DELETE_PRODUCT,
                payload: _id
            });
        } catch (err) {
            dispatch({ type: PRODUCT_ERROR, payload: err.response.data.error })
        }
    };

    const setCurrentProduct = product => {
        dispatch({ type: SET_CURRENT_PRODUCT, payload: product });
    };

    const clearCurrentProduct = () => {
        dispatch({ type: CLEAR_CURRENT_PRODUCT });
    };

    const updateProduct = async product => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.put(`/api/v1/product-list/${product._id}`, product, config);
            dispatch({
                type: UPDATE_PRODUCT,
                payload: res.data.updatedProduct
            });
        } catch (err) {
            dispatch({ type: PRODUCT_ERROR, payload: err.response.data.error })
        }
    };

    const getProducts = async () => {
        try {
            const res = await axios.get('/api/v1/product-list');
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data.productList
            });
        } catch (err) {
            dispatch({ type: PRODUCT_ERROR, payload: err.response.data.error })
        }
    };

    return (
        <ShopHandlerContext.Provider
            value={{
                availableProducts: state.availableProducts,
                currentProduct: state.currentProduct,
                loading: state.loading,
                error: state.error,
                addProduct,
                deleteProduct,
                setCurrentProduct,
                clearCurrentProduct,
                updateProduct,
                getProducts
            }}>
            {props.children}
        </ShopHandlerContext.Provider>
    );
};

export default ShopHandlerState;