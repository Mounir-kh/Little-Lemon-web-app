import React from 'react';
import Presentation from './Presentation';
import Specials from './Specials';
import './Main.css';
function Main(){
    return(
        <div className='main_container'>
        <Presentation/>
        <Specials/>
        </div>
        );
    }
    export default Main;