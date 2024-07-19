import React, { useState } from "react";
import "./shop.css";
import { FaHeart, FaEye } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Shop = ({shop, Filter, allcatefilter, addtocart}) => {

    //TOGGLE PRODUCT
    const [showDetail, setShowDetail]= useState(false)
    //DETAIL PAGE DATA
    const [detail, setDetail]=useState([])

    const dialogbox=(product)=>{

        const detaildata=([{product}]) //DESTRUCTURING AN OBJECT FROM AN ARRAY
        const productdetail= detaildata[0]['product']
        setDetail(productdetail)

        setShowDetail(true)
    }
    const closeDetails =()=>{
        setShowDetail(false)
    }
    return(
        <>
        {
            showDetail ?
            <>
            <div className="product_details">
                 <button className="close_btn" onClick={()=> closeDetails()}><ImCross /></button>
                <div className="container">
                <div className="img_box">
                    <img src={detail.image} alt="product_image" ></img>
                </div>
                <div className="info">
                    <h4>{detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>Enjoy stunning 4K resolution and immersive sound with our Ultra HD Smart TV. Stream seamlessly with smart connectivity and elevate your living space with a sleek design. Experience the future of home entertainment today!</p>
                    <h3>${detail.price}</h3>
                    <button onClick={()=> addtocart(detail)}>Add to cart</button>
                </div>

                </div>
            </div>
            </>
            : null
        }
    
        <div className="shop">
            <h2> # shop</h2>
            <p>Home .shop</p>
            <div className="container">
                <div className="left_box">
                    <div className="category">
                        <div className="header">
                            <h2>All categories</h2>
                        </div>
                        <div className="box">
                            <ul>
                                <li onClick={()=> allcatefilter()}># All</li>
                                <li onClick={()=> Filter ("tv")}># tv</li>
                                <li onClick={()=> Filter ("laptop")}># laptop</li>
                                <li onClick={()=> Filter ("watch")}># watch</li>
                                <li onClick={()=> Filter ("speaker")}># speaker</li>
                                <li onClick={()=> Filter ("electronics")}># electronics</li>
                                <li onClick={()=> Filter ("headphones")}># headphones</li>
                                <li onClick={()=> Filter ("phone")}># phone</li>
                            </ul>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="img_box">
                            <img src="image/shop_left.avif" alt="banner" />
                        </div>
                    </div>
                </div>
                <div className="right_box">
                <div className="banner">
                    <div className="img_box">
                        <img src="image/shop_top.webp" alt="banner"/>
                    </div>
                </div>
                <div className="product_box">
                    <h2>Shop products</h2>
                    <div className="product_container"> 
                        {
                            shop.map((curElm)=>{
                                return(
                                    <>
                                    <div className="box">
                                        <div className="img_box">
                                            <img src={curElm.image} alt="image" />
                                            <div className="icon">
                                            <li><FaHeart /></li>
                                            <li onClick={()=> dialogbox(curElm)}><FaEye /></li>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <h2>{curElm.Name}</h2>
                                            <p>${curElm.price}</p>
                                            <button onClick={()=> addtocart (curElm)}>Add to cart</button>
                                        </div>
                                    </div>
                                    </>
                                )
                            })             
                        }                        
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Shop;