import React, { Fragment, useContext } from 'react';
import ShopHandlerContext from '../../context/shopHandler/shopHandlerContext';
import AvailableProductForAdminItem from './AvailableProductForAdminItem';

const AvailableProductsForAdmin = () => {
    const shopHandlerContext = useContext(ShopHandlerContext);
    const { availableProducts } = shopHandlerContext;

    if (availableProducts.length === 0) {
        return <h4>No products available</h4>;
    }

    return (
        <Fragment>
            {availableProducts.map(product => (
                <AvailableProductForAdminItem key={product._id} product={product} />
            ))}
        </Fragment>
    );
};

export default AvailableProductsForAdmin;
