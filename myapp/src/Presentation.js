import React from 'react';
import restaurant from './icons_assets/restaurant.jpg';
import './Presentation.css';

function Presentation(){
    return (
        <div className='partOneMain'>
            <section>
                <h1>Little lemon</h1>
                <h3>Chicago</h3>
                <p>Embark on an exquisite gastronomic voyage at 'Dragon Delights,' a Chinese restaurant that captures the essence of authentic flavors. Immerse yourself in the artistry of dim sum, wok-tossed delicacies, and timeless classics. Discover the heart of China through each dish, where tradition meets innovation in a symphony of taste.</p>
            </section>
            <section>
                <img src={restaurant} alt='restaurant'/>
            </section>
        </div>
    );
}
export default Presentation;