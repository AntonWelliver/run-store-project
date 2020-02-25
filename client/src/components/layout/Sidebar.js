import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SidebarContext from '../../context/sidebar/sidebarContext';

const Sidebar = () => {
    const sidebarContext = useContext(SidebarContext);
    const { sidebarClassName, closeSidebar } = sidebarContext;
    const onClick = () => {
        closeSidebar();
    };
    return (
        <div className={sidebarClassName}>
            <div className='container'>
                <h2>Sidebar</h2>
                <ul>
                    <li>
                        <Link to='/' onClick={onClick} className='btn-primary'>
                            Races
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
