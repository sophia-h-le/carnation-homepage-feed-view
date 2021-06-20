import React from 'react';
import './WeeklyAsk.css';

const WeeklyAsk = () => {
    const EXAMPLE_POSTS = [
        {
            author: 'DrJoSleep',
            content: 'Hi! I’m Dr. Jo and I’m a research specialist on sleep regressions. AMA!',
            // content: '',
            timestamp: 'June 15'
        }
    ]

    return (
        <div className='weekly-ask'>
            <div className='title'>The WeeklyAsk</div>
            <ul>
                {EXAMPLE_POSTS.map((postItem, index) =>
                    <li key={index}>
                        <div className='root-post'>{postItem.content}</div>
                        <div className='post-info'>
                            <div className='author-name'>By {postItem.author}</div> 
                            <div className='post-time'>On {postItem.timestamp}</div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default WeeklyAsk;