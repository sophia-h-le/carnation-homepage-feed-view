import React, {useState} from 'react';
import './MainFeed.css';

const MainFeed = () => {
    const EXAMPLE_FEED = [
        {
            author: 'HongAnh Ng.',
            content: 'At vero eos et Nam l assumenda est, omnis dolor rep volucusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
            timestamp: 'June 16',
            comments: []
        },
        {
            author: 'HongAnh Ng.',
            content: 'Sed ut perspiciatis undeui ratione volorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            timestamp: 'June 18',
            comments: []
        },
        {
            author: 'Sandra K.',
            content: 'Lorem ipsum dolor sit amet, consectetur ineprehenderit in voluptate velit esse cillum dolore eculpa qui officia deserunt mollit anim id est laborum.',
            timestamp: 'June 18',
            comments: []
        },
        {
            author: 'Siya M.',
            content: 'Sleep is a naturally recuwith surrocoma or disorders of consciousness, with sleep displaying different, active brain patterns.',
            timestamp: 'June 19',
            comments: []
        }
    ]

    const [posts, setPosts] = useState(EXAMPLE_FEED)

    // let posts_reverse = posts.reverse()

    return (
        <div>
            {posts.map((postItem, index) => 
                <div key={index}>
                    <div className='post-content'>{postItem.content}</div>
                    <div className='post-author'>By {postItem.author}</div>
                    <div className='post-time'>On {postItem.timestamp}</div>
                </div>
            )}
        </div>
        
    );
}

export default MainFeed;