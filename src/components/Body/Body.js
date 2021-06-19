import React from 'react';
import './Body.css';
import TopofFeed from './TopofFeed/TopofFeed';
import SideMenu from './SideMenu/SideMenu';
import MainFeed from './MainFeed/MainFeed';

const Body = () => {
    // console.log('Main feed')
    return (
        <div className='Body'>
            <TopofFeed/>
            <SideMenu/>
            <MainFeed/>
        </div>
    );
}

export default Body;