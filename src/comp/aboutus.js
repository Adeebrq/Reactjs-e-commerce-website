import React from "react";
import "./aboutus.css";
import { Link } from "react-router-dom";

const Aboutus = () => {
    return(
        <div className="aboutus">
            <div className="container">
                <div className="image">
                <img src="./image/icons8-about-us.svg" alt="banner"></img>
                </div>
                <div className="info">
                    <h3>Welcome to Techayo!</h3>
                    <p id="p1">At Techayo, we're passionate about delivering top-quality products that meet your needs and exceed your expectations. Our mission is simple: to provide an exceptional shopping experience with unmatched convenience, selection, and customer service. Founded in 2024, we've grown from a small startup into a trusted destination for tech needs. Our team is dedicated to sourcing only the best products and ensuring a seamless shopping journey from start to finish.</p>
                    <h3>Our mission</h3>
                    <p>Our mission is to offer a curated selection of high-quality products that cater to your needs and preferences. We are dedicated to sourcing items from reputable brands and artisans, ensuring that each product meets our rigorous standards of excellence. Whether your searching for tech products or unique finds, we strive to bring you the best of the best.</p>
                    <h3>Why choose us?</h3>
                    <div className="list">
                    <ul>
                        <li>Discover a diverse range of products tailored to suit every taste and need.</li>
                        <li>We carefully vet each product to ensure it meets our high standards of quality and performance.</li>
                        <li>Enjoy a seamless shopping experience with easy navigation, secure checkout, and fast delivery.</li>                    
                    </ul>
                    </div>
                    <p id="p2">Thank you for choosing Techayo. We're excited to serve you and help you find exactly what you're looking for.</p>
                    <Link to="/shop"><button>Shop here</button></Link>
                </div>
            </div>

        </div>

    )
}
export default Aboutus;