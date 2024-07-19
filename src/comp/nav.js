import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";
import "./nav.css";


const Nav = ({search, setSearch, searchproduct}) =>{
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0(); //DESTRUCTURING
    return(
        <div className="header">
            <div className="top_header"> 
                <div className="icon">
                <MdOutlineLocalShipping />
                </div>
                <div className="info">
                    <p>free shipping when shopping upto $1000</p>
                </div>
            </div>
            <div className="mid_header">
                <div className="logo">
                    <img src="image/logo.webp" alt="logo" />
                </div>
                <div className="search_box">
                    <input type="text"  value={search} placeholder="Search Category Name" onChange={(e)=> setSearch(e.target.value)}></input>
                    <button onClick={searchproduct}><IoSearchOutline /></button>
                </div>
                {
                    isAuthenticated ?
                    <div className="user">
                     <div className="icon">
                         <IoMdLogOut />
                     </div>
                    <div className="btn">
                         <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                    </div>
                </div>
                :
                <div className="user">
                    <div className="icon">
                        <IoMdLogIn />
                    </div>
                <div className="btn">
                    <button onClick={() => loginWithRedirect()}>Login</button>
                </div>
            </div>
                }
                </div>
                <div className="last_header">
                    <div className="user_profile">
                        {                            
                            isAuthenticated ?
                            <>
                            <div className="icon">
                                <FaRegCircleUser />   
                            </div>
                            <div className="info">
                             <h2>{user.name}</h2>
                             <p>{user.email}</p>
                            </div>
                            </>
                            :
                            <>
                            <div className="icon">
                             <FaRegCircleUser />                                 
                            </div>
                            <div className="info">
                                <p>Please Login!</p>                                
                                </div>                            
                            </>
                        }
                </div>
                <div className="nav">
                    <ul>
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><Link to="/shop" className="link">Shop</Link></li>
                        <li><Link to="/cart" className="link">Cart</Link></li>
                        <li><Link to="/about" className="link">About</Link></li>
                        <li><Link to="/contact" className="link">Contact</Link></li>
                    </ul>
                </div>
                <div className="offer">
                    <p>Flat 10% off on all Apple products</p>
                </div>
            </div>
        </div>
    )
}
export default Nav;