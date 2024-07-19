import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./home";
import Shop from "./shop";
import Cart from "./cart";
import Contact from "./contact";
import Aboutus from "./aboutus";


const Rout =({shop, Filter, allcatefilter, addtocart, cart, setCart})=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home addtocart={addtocart}/>}/>
            <Route path="cart" element={<Cart cart={cart} setCart={setCart}/>} />
            <Route path="shop" element={<Shop shop={shop} Filter={Filter}  allcatefilter={allcatefilter} addtocart={addtocart}/>}/>
            <Route path="about" element={<Aboutus/>} />
            <Route path="contact" element={<Contact/>} />
        </Routes>
        </>
    )
}
export default Rout;