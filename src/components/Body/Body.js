import React from 'react';
import './Body.css';
import TopofFeed from './TopofFeed/TopofFeed';
import BodyofFeed from './BodyofFeed/BodyofFeed';

const Body = () => {
    // console.log('Main feed')
    return (
        <div className='Body'>
            <TopofFeed/>
            <BodyofFeed/>
            
        </div>
    );
}

export default Body;