import React from 'react';
import './PostFilter.css';

const PostFilter = () => {
    return (
        <div className='post-filter'>
            <button className='btn-top'>Top</button>
            <button className='btn-most-recent'>Most recent</button>
        </div>
    );
}

export default PostFilter;