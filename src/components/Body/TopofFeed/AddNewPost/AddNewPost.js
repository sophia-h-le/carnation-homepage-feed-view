import React from 'react';
import './AddNewPost.css';
import plusSign from './icons8-plus-96.png';

const AddNewPost = () => {
    return (
        <div>
            <img className='add-new-post-icon' src={plusSign} alt="Add New Post icon" />
            <div className='add-new-post'>Create a Post</div>
        </div>
    );
}

export default AddNewPost;