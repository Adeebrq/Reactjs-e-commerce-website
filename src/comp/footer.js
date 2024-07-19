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
                            <p>random text to insert here haha haha haha</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                         <FaShippingFast />
                        </div>
                        <div className="details">
                            <h4>24/7 delivery</h4>
                            <p>random text to insert here haha haha haha</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                         <MdSupportAgent />
                        </div>
                        <div className="details">
                            <h4>24X7 support</h4>
                            <p>random text to insert here haha haha haha</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                         <FaWallet />
                        </div>
                        <div className="details">
                            <h4>Money back guarantee</h4>
                            <p>random text to insert here haha haha haha</p>
                        </div>
                    </div>
                </div>
                <div className="right_box">
                        <div className="header">
                            <img src="./image/logo.webp" alt="page logo"/>
                            <p>lorem text etxt text hahammhahha</p>
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