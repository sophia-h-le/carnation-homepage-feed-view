import React from 'react';
import './Navbar.css';
import Logo from './navbar-compnents/Logo/Logo';
import MenuItems from './navbar-compnents/MenuItems/MenuItems';
// import UpperRight from './navbar-compnents/UpperRight/UpperRight';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <Logo/>
            <MenuItems/>
            {/* <UpperRight/> */}
        </nav>
    );
}

export default Navbar;