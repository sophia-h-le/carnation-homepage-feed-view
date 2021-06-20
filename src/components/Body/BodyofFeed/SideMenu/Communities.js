import React from 'react';
import './Communities.css';
import wellnessicon from './community-images/wellness.png';
import sleepicon from './community-images/sleeping.png';
import adoptionicon from './community-images/adoption.png';


const Communities = () => {
    const EXAMPLE_COMMUNITIES = [
        {
            label: 'Wellness',
            className: 'community-link',
            url: '#',
            icon: wellnessicon
        },
        {
            label: 'Sleep',
            className: 'community-link',
            url: '#',
            icon: sleepicon
        },
        {
            label: 'Adoption',
            className: 'community-link',
            url: '#',
            icon: adoptionicon
        }
    ]
    return (
        <ul className='community-menu'>
            {EXAMPLE_COMMUNITIES.map((communityItem, index) =>
                <li key={index}>
                    <img src={communityItem.icon}></img>
                        <a className={communityItem.className} href={communityItem.url}>
                        {communityItem.label}
                    </a>
                    
                </li>
            )}
        </ul>
    );
}

export default Communities;