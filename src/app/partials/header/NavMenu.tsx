// React
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    return (
        <nav className="nav-menu hide-sm">
            <ul className="flex-container">
                <li><NavLink to="">Best Trucking Jobs</NavLink></li>
                <li><NavLink to="">Post Jobs</NavLink></li>
                <li><NavLink to="">Trucking Companies</NavLink></li>
                <li><NavLink to="">Resume Builder</NavLink></li>
                <li><NavLink to="">Industry & Stories</NavLink></li>
                <li><NavLink to="">Find CDL Jobs</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavMenu;