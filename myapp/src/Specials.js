import React from 'react';
import './Specials.css';
import greekSalade from './icons_assets/greek salad.jpg';
import bruchetta from './icons_assets/bruchetta.svg';
import lemonDessert from './icons_assets/lemon dessert.jpg';
function Specials(){
    return(
        <div className='specials_container'>
            <section>
                <h1>Specials</h1>
                <button>Online Menu</button>
            </section>
            <section>
                <div className='greek_salade'>
                    <img src={greekSalade} alt='Greek salade'></img>
                    <div>
                    <h4>Greek salade</h4>
                    <p>$12.99</p>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <h5>Order a delivery</h5>
                </div>
                <div className='bruchetta'>
                    <img src={bruchetta} alt='Bruchetta'></img>
                    <div>
                    <h4>Bruchetta</h4>
                    <p>$ 5.99</p>
                    </div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <h5>Order a delivery</h5>
                </div>
                <div className='lemon_dessert'>
                    <img src={lemonDessert} alt='Lemon Dessert'></img>
                    <div>
                        <h4>Lemon Dessert</h4>
                        <p>$ 5.00</p>
                    </div>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <h5>Order a delivery</h5>
                </div>
            </section>
        </div>
    )
}
export default Specials;