import React from 'react';
import './Communities.css';


const Communities = () => {
    const EXAMPLE_COMMUNITIES = [
        {
            label: 'Wellness',
            className: 'community-link',
            url: '#'
        },
        {
            label: 'Sleep',
            className: 'community-link',
            url: '#'
        },
        {
            label: 'Adoption',
            className: 'community-link',
            url: '#'
        }
    ]
    return (
        <ul className='community-menu'>
            {EXAMPLE_COMMUNITIES.map((communityItem, index) =>
                <li key={index}>
                    <a className={communityItem.className} href={communityItem.url}>
                        {communityItem.label}
                    </a>
                </li>
            )}
        </ul>
    );
}

export default Communities;