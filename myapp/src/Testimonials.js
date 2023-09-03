import React from 'react';
import './Testimonials.css';
import Rose from './images/BodenRose.jpg';
import Finne from './images/FinneganLindsey.jpg';
import Ian from './images/Ian Terry.jpg';
import Rylee from './images/Rylee Wheeler.jpg';
import Star from './images/Star.jpg';
function Testimonials(){
    return(
        <><h2>Testimonials</h2>
        <div className='rating'>
            <section>
                <div className='ratingStar'>
                    <img src={Star} alt='rating'></img>
                </div>
                <div className='profile'>
                <img src={Rose} alt='Profile'></img>
                <h5>BodenRose</h5>
                </div>
            </section>

            <section>
                <div className='ratingStar'>
                    <img src={Star} alt='rating'></img>
                    <img src={Star} alt='rating'></img>
                    <img src={Star} alt='rating'></img>
                </div>
                <div className='profile'>
                <img src={Finne} alt='Profile'></img>
                <h5>Finnegan Lindsey</h5>
                </div>
            </section>

            <section>
                <div className='ratingStar'>
                    <img src={Star} alt='rating'></img>
                    <img src={Star} alt='rating'></img>
                    <img src={Star} alt='rating'></img>
                    <img src={Star} alt='rating'></img>
                    <img src={Star} alt='rating'></img>
                </div>
                <div className='profile'>
                <img src={Ian} alt='Profile'></img>
                <h5>Ian Terry</h5>
                </div>
            </section>

            <section>
                <div className='ratingStar'>
                    <img src={Star} alt='rating'></img>
                </div>
                <div className='profile'>
                <img src={Rylee} alt=''></img>
                <h5>Rylee Wheeler</h5>
                </div>
            </section>
        </div>
        </>
    )
}
export default Testimonials;