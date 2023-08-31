import React from 'react';
import './Nav.css';
function Nav(){
    return(
        <div className='nav-list'>
        <ul>
            <li><a href=''>HOME</a></li>
            <li><a href=''>ABOUT</a></li>
            <li><a href=''>MENU</a></li>
            <li><a href=''>RESERVATIONS</a></li>
            <li><a href=''>ORDER ONLINE</a></li>
            <li><a href=''>LOGIN</a></li>
        </ul>
        </div>
    );
    }
    export default Nav;