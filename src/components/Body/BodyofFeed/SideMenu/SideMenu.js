import React from 'react';
import './SideMenu.css';
import plusSign from './icons8-plus-96.png';

const SideMenu = () => {
    return (
        <div className='SideMenu'>
            <div className='title'>Your Communities</div>
            <div>
                {/* <img className='join-communities-icon' src={plusSign} alt="Join Communities icon" /> */}
                <div className='join-communities-title'> + Join Communities</div>
            </div>
        </div>
    );
}

export default SideMenu;