import React from "react";
import { LuPiggyBank } from "react-icons/lu";
import { FaShippingFast, FaWallet } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import "./footer.css";


const Footer = () =>{
    return(
        <>
        <div className="footer">
            <div className="container">
                <div className="left_box">
                    <div className="box">
                        <div className="icon_box">
                         <LuPiggyBank />
                        </div>
                        <div className="details">
                            <h4>Great Savings!</h4>
                            <p>Unlock unbeatable deals and enjoy Great Savings on every purchase today!</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                         <FaShippingFast />
                        </div>
                        <div className="details">
                            <h4>24/7 delivery</h4>
                            <p>Get what you need, anytime, anywhere with our 24/7 delivery service!</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                         <MdSupportAgent />
                        </div>
                        <div className="details">
                            <h4>24X7 support</h4>
                            <p>Round-the-clock support, because we're here for you 24/7!"</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                         <FaWallet />
                        </div>
                        <div className="details">
                            <h4>Money back guarantee</h4>
                            <p>Shop with confidence – 100% Money Back Guarantee on every purchase!</p>
                        </div>
                    </div>
                </div>
                <div className="right_box">
                        <div className="header">
                            <img src="./image/logo.webp" alt="page logo"/>
                            <p>At Techayo, we're dedicated to delivering the latest and most innovative tech products to our customers. Our commitment to quality, competitive pricing, and exceptional customer service ensures an unbeatable shopping experience. From gadgets to accessories, we have everything you need, backed by a satisfaction guarantee.</p>
                        </div>
                        <div className="bottom">
                            <div className="box">
                                <h3>Your Account</h3>
                                <ul>
                                    <li>About us</li>
                                    <li>Account</li>
                                    <li>Payment</li>
                                    <li>Sales</li>
                                </ul>
                            </div>
                            <div className="box">
                                <h3>Products</h3>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Track order</li>
                                    <li>New products</li>
                                    <li>Old products</li>
                                </ul>
                            </div>
                            <div className="box">
                                <h3>Contact us</h3>
                                <ul>
                                    <li>KNK nungambakkam chennai 6000014</li>
                                    <li>+91-1234567890</li>
                                    <li>info@gmail</li>
                                </ul>
                            </div>

                        </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;