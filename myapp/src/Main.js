import React from 'react';
import Presentation from './Presentation';
import Specials from './Specials';
import Testimonials from './Testimonials';
import './Main.css';
function Main(){
    return(
        <div className='main_container'>
        <Presentation/>
        <Specials/>
        <Testimonials/>
        </div>
        );
    }
    export default Main;