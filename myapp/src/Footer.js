import React from 'react';
import './Footer.css';
import FooterImg from './icons_assets/restauranfood.jpg';
function Footer(){
    return(
        <div className='footerPart'>
        <section>
            <img src={FooterImg} alt='restau'></img>
        </section>
        
        <section>
            <ul>
                <h4>Doormat Navigation</h4>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </section>
        
        <section>
            <ul>
                <h4>Contact</h4>
                <li><a>Adress</a></li>
                <li><a>phone number</a></li>
                <li><a>email</a></li>
            </ul>
        </section>
        
        <section>
            <ul>
                <h4>Social Media Links</h4>
                <li><a>Adress</a></li>
                <li><a>phone number</a></li>
                <li><a>email</a></li>
            </ul>
        </section>
        </div>
        );
    }
    export default Footer;