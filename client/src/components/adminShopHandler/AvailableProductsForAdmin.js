import React, { Fragment, useContext, useEffect } from 'react';
import ShopHandlerContext from '../../context/shopHandler/shopHandlerContext';
import AvailableProductForAdminItem from './AvailableProductForAdminItem';
import Spinner from '../layout/Spinner';

const AvailableProductsForAdmin = () => {
    const shopHandlerContext = useContext(ShopHandlerContext);
    const { availableProducts, getProducts, loading } = shopHandlerContext;

    useEffect(() => {
        getProducts();
        //eslint-disable-next-line
    }, []);

    if (availableProducts !== null && availableProducts.length === 0 && !loading) {
        return <h4>No products available</h4>;
    }

    if (availableProducts !== null && !loading) {
        return (
            <Fragment>
                {
                    availableProducts.map(product => (
                        <AvailableProductForAdminItem key={product._id} product={product} />
                    ))
                }
            </Fragment>
        );
    }
    if (loading) {
        return (
            <Fragment>
                <Spinner />
            </Fragment>
        )
    }
};

export default AvailableProductsForAdmin;
