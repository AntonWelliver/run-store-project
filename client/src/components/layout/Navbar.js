import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SidebarContext from '../../context/sidebar/sidebarContext';

const Navbar = ({ title }) => {
    const sidebarContext = useContext(SidebarContext);
    const { openSidebar, closeSidebar, sidebarClassName } = sidebarContext;
    const onClick = () => {
        if (sidebarClassName === 'sidebar close') {
            openSidebar();
        } else {
            closeSidebar();
        }
    };
    return (
        <div className='navbar'>
            <h1>
                {title}
            </h1>
            <ul>
                <li>
                    <Link to='/' style={{ color: 'black' }}>Home</Link>
                </li>
                <li>
                    <Link to='/shop' style={{ color: 'black' }}>Shop</Link>
                </li>
                <li>
                    <Link to='/login' style={{ color: 'black' }}>Login</Link>
                </li>
                <button style={{ paddingRight: '10px', paddingLeft: '10px', borderRadius: '10px' }} onClick={onClick}>
                    <i className="fas fa-bars"></i>
                </button>
            </ul>
        </div>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: 'Run For Joy'
};

export default Navbar;
