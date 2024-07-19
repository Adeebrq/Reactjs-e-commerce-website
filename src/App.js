import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./comp/nav";
import Rout from './comp/rout';
import Footer from "./comp/footer";
import Homeproduct from "./comp/home_product";
import Home from "./comp/home";

const App = () =>{
  //ADD TO CART
  const [cart, setCart]= useState([])
  //SHOP
  const [shop, setShop]= useState(Homeproduct)
  //SHOP SEARCH FILTER
  const [search, setSearch]= useState('')
  // SHOP CATEGORY FILTER
  const Filter = (x) => {
    const catefilter= Homeproduct.filter((product)=>
      {
      return product.cat === x
    })
    setShop(catefilter)
  }
  const allcatefilter =()=> 
    {
      setShop(Homeproduct)
    }

  // SHOP SEARCH FEATURE

const searchlength= (search || []).length ===0
  const searchproduct =()=> 
    {
      if (searchlength){
        alert("Please search something")
        setShop(Homeproduct)
        
      } else {

        const searchfilter =Homeproduct.filter((x) =>
          {
            return x.cat === search
        })
        setShop(searchfilter)
      }
  }
// ADD TO CART

const addtocart = (product) => 
  {
    const exist= cart.find((x)=>{
      return x.id === product.id
    })
    if(exist){
      alert('Product is already added to cart')
    } else {
      setCart([...cart, {...product, qty:1}])
      alert("added to cart");
    }
}

  return(
    <>
    <BrowserRouter>
      <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
      <Rout setCart={setCart} cart={cart} shop= {shop} Filter={Filter}  allcatefilter={allcatefilter} addtocart={addtocart} />
      <Footer />
      </BrowserRouter>
      </>
  )
}
export default App;