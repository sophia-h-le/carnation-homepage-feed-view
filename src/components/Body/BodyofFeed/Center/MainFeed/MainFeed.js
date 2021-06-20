import React, {useState} from 'react';
import './MainFeed.css';
import honganhicon from './Landing page - Profile Images/bethany-beck-s042qiVMEZU-unsplash.jpg';
import sandraicon from './Landing page - Profile Images/larry-crayton-e2qz2V0SMpo-unsplash.jpg';
import siyaicon from './Landing page - Profile Images/m-t-elgassier-G_acucnTJNw-unsplash.jpg';

const MainFeed = () => {
    const EXAMPLE_FEED = [
        {
            author: 'HongAnh Ng.',
            icon: honganhicon,
            content: 'At vero eos et Nam l assumenda est, omnis dolor rep volucusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
            timestamp: 'June 16',
            comments: []
        },
        {
            author: 'HongAnh Ng.',
            icon: honganhicon,
            content: 'Sed ut perspiciatis undeui ratione volorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            timestamp: 'June 18',
            comments: []
        },
        {
            author: 'Sandra K.',
            icon: sandraicon,
            content: 'Lorem ipsum dolor sit amet, consectetur ineprehenderit in voluptate velit esse cillum dolore eculpa qui officia deserunt mollit anim id est laborum.',
            timestamp: 'June 18',
            comments: []
        },
        {
            author: 'Siya M.',
            icon: siyaicon,
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
                    <table>
                            <tr>
                                <td><img src={postItem.icon} className='avatar'></img></td>
                                <td><div className='post-content'>{postItem.content}</div></td>
                            </tr>
                        </table>
                    
                    <div className='post-author'>By {postItem.author}</div>
                    <div className='post-time'>On {postItem.timestamp}</div>
                </div>
            )}
        </div>
        
    );
}

export default MainFeed;