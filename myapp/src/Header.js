import React from 'react';
import './Header.css';
import Nav from './Nav';
import logoSvg from './icons_assets/Logo2.svg';

function Header(){
    return(
        <div className='header_part'>
        <img src={logoSvg} alt='Little lemon logo'/>
        <Nav/>
        </div>
    );
};
export default Header;