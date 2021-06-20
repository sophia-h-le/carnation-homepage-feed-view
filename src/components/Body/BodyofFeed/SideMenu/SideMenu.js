import React from 'react';
import './SideMenu.css';
// import plusSign from './icons8-plus-96.png';
import Communities from './Communities';

const SideMenu = () => {
    return (
        <div className='SideMenu'>
            <div className='title'>Your Communities</div>

            <Communities/>

            {/* <img className='join-communities-icon' src={plusSign} alt="Join Communities icon" /> */}
            <div className='join-communities-title'> + Join Communities</div>
        </div>
    );
}

export default SideMenu;