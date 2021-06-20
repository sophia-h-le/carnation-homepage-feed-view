import React from 'react';
import MainFeed from './MainFeed/MainFeed';
import WeeklyAsk from './WeeklyAsk/WeeklyAsk';

const Center = () => {
    return (
        <div className='center'>
            <WeeklyAsk/>
            {/* <MainFeed/> */}
        </div>
    );
}

export default Center;