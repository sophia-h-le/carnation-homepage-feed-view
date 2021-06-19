import React from 'react';
import './Logo.css';
import carnationLogo from './icons8-flower-96.png'

const Logo = () => { 
    // console.log(carnationLogo);
    return (
        <div>
            <img className='logoImage' src={carnationLogo} alt="Carnation Logo" />;
            <div className='Logo' >Carnation</div>
        </div>
    );
}

export default Logo;