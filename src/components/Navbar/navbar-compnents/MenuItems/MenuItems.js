import React from 'react';
import './MenuItems.css'

const MenuItems = () => {
    const MenuItemList = [
        {
            label: 'Home',
            url: '#',
            className: 'nav-links'
        },
        {
            label: 'Communities',
            url: '#',
            className: 'nav-links'
        },
        {
            label: 'Messages',
            url: '#',
            className: 'nav-links'
        },
        {
            label: 'Notifications',
            url: '#',
            className: 'nav-links'
        },
        {
            label: 'Contact Us',
            url: '#',
            className: 'nav-links'
        }
    ]
    return (
        <ul className='nav-menu'>
            {MenuItemList.map((menuItem, index) => 
                <li key={index}>
                    <a className={menuItem.className} href={menuItem.url}>
                        {menuItem.label}
                    </a>
                </li>
            )}
        </ul>
    );
}

export default MenuItems;