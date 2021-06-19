import React from 'react';
import AddNewPost from './AddNewPost/AddNewPost';
import PostFilter from './PostFilter/PostFilter';

const TopofFeed = () => {
    return (
        <div className='top-of-feed'>
            <PostFilter />
            <AddNewPost />

        </div>
    );
}

export default TopofFeed;