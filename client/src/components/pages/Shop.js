import React, { useContext } from 'react';
import AvailableProducts from '../shopHandler/AvailableProducts';
import ShopHandlerContext from '../../context/shopHandler/shopHandlerContext';

const Shop = () => {
    const shopHandlerContext = useContext(ShopHandlerContext);
    const items = shopHandlerContext.shoppingCart.length;
    return (
        <div>
            <button style={{
                float: 'right',
                borderRadius: '10px',
                paddingRight: '10px',
                paddingLeft: '10px'
            }}
                className='btn btn-md'
            >
                <i class="fas fa-shopping-cart"> {items}</i>
            </button>
            <h1 className='text-center'>Shop</h1>
            <div>
                <div>
                    <AvailableProducts />
                </div>
            </div>
        </div >
    )
}

export default Shop;
