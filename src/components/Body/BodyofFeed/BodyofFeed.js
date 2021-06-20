import React from 'react';
import SideMenu from './SideMenu/SideMenu';
import Center from './Center/Center';

const BodyofFeed = () => {
    return (
        <div className="body-of-feed">
            <SideMenu/>
            <Center/>
        </div>
    );
}

export default BodyofFeed;