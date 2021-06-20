import React, { useState } from 'react';
import './WeeklyAsk.css';
import MainFeed from '../MainFeed/MainFeed';
import specialisticon from './images/sample_specialist_icon.jpg';
import honganhicon from './images/bethany-beck-s042qiVMEZU-unsplash.jpg';
import sandraicon from './images/larry-crayton-e2qz2V0SMpo-unsplash.jpg';
import siyaicon from './images/m-t-elgassier-G_acucnTJNw-unsplash.jpg';
import jiyoungicon from './images/20200413_185113.jpg';



const WeeklyAsk = () => {
    const EXAMPLE_COMMENTS = [
        {
            author: 'Sandra K.',
            icon: sandraicon,
            content: "I'm sleep deprived but don't want to use stimulants while breastfeeding. What can I do?",
            timestamp: 'June 15'
        },
        {
            author: 'Jiyoung Eum',
            icon: jiyoungicon,
            content: "I can't sleep if I hear my baby's voice, even when I'm exhausted. What should be my strategy?",
            timestamp: 'June 15'
        },
        {
            author: 'Siya M.',
            icon: siyaicon,
            content: "I'm sleepy all the time after birth but still physically tired. How to I get better quality sleep?",
            timestamp: 'June 15'
        },

    ]
    const [comments, setComments] = useState(EXAMPLE_COMMENTS);
    
    const EXAMPLE_POSTS = [
        {
            author: 'DrJoSleep',
            icon: specialisticon,
            content: 'Hi! I’m Dr. Jo and I’m a research specialist on sleep regressions. AMA!',
            // content: '',
            timestamp: 'June 15',
            comments: comments
        }
    ]

    const [reactCount, setReactCount] = useState(0);
    const handleReactClick = (event) => {
        console.log('react button clicked')
        setReactCount(reactCount + 1)
    }

    const [commentText, setCommentText] = useState('');
    const handleCommentClick = (event) => {
        console.log(commentText)
        const commentObject = {
            author: 'HongAnh Ng.',
            icon: honganhicon,
            content: commentText,
            timestamp: 'June 20'
        }
        setComments(comments.concat(commentObject))
        setCommentText('')
    }
    const handleCommentTextChange = (event) => {
        setCommentText(event.target.value)
    }

    return (
        <div className='weekly-ask'>
            <div className='title'>The WeeklyAsk</div>
            <ul>
                {EXAMPLE_POSTS.map((postItem, index) =>
                    <li key={index}>
                        <table>
                            <tr>
                                <td><img src={postItem.icon} className='avatar'></img></td>
                                <td><div className='root-post'>{postItem.content}</div></td>
                            </tr>
                        </table>
                        
                        
                        <div className='post-info'>
                            <div className='author-name'>By {postItem.author}</div> 
                            <div className='post-time'>On {postItem.timestamp}</div>
                            
                        </div>
                        <div className='comment'>
                            <textarea value={commentText} onChange={handleCommentTextChange}></textarea>
                            <button className='btn-react' onClick={handleReactClick}>{reactCount}</button>
                            <button className='btn-comment' onClick={handleCommentClick}>Comment</button>
                        </div>
                        {postItem.comments.map((commentItem, index) => 
                            <div key={index}>
                                <table>
                                    <tr>
                                        <td><img src={commentItem.icon} className='avatar'></img></td>
                                        <td><div className='comment-text'>{commentItem.content}</div></td>
                                    </tr>
                                </table>
                                
                                <div className='comment-author'>By {commentItem.author}</div>
                                <div className='comment-time'>On {commentItem.timestamp}</div>
                            </div>
                        )}
                    </li>
                )}
            </ul>
            <br/>
            <MainFeed/>
        </div>
    );
}

export default WeeklyAsk;