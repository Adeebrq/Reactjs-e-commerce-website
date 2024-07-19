import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";
import { FaEye } from "react-icons/fa";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaShoppingCart} from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";


const Home = ({addtocart}) => {
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])
    
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
    const filtercate=(x)=>{
        const filterproduct= Homeproduct.filter((curElm)=>{
            return curElm.type === x
        })
        setTrendingProduct(filterproduct)
    }
    const allTrendingProducts= ()=>{
        setTrendingProduct(Homeproduct)
    }
    useEffect(()=> 
    {
        productcategory()

    })
    const productcategory=()=> {
        const newcategory = Homeproduct.filter((x)=>
        {
            return x.type === "new"

        })
        setNewProduct(newcategory)
        // for featured products
        const featuredcategory = Homeproduct.filter((x)=>{
            return x.type === "featured"
        })
        setFeaturedProduct(featuredcategory)
        // for top products
        const topcategory= Homeproduct.filter((x)=>{
            return x.type === "top"
        })
        setTopProduct(topcategory)

    }
    return(
        <>
        <div className="home">
            <div className="top_banner">
                <div className="content">
                    <h3>Silver Almunium</h3>
                    <h2>Apple Watch</h2>
                    <p>30% off your first order</p>
                    <Link to="/shop" className="link" >Shop now!</Link>
                </div>
            </div>
            <div className="trending">
                <div className="container">
                    <div className="left_box">
                        <div className="header">
                            <div className="heading">
                                <h2 onClick={()=> allTrendingProducts()}>Trending products</h2>
                            </div>
                            <div className="cate">
                             <h3 onClick={()=> filtercate("new")}>New</h3>
                             <h3 onClick={()=> filtercate("featured")}>Featured</h3>
                             <h3 onClick={()=> filtercate("top")}>Top selling</h3>                             
                            </div>
                        </div>
                        <div className="products">
                        <div className="container">
                            {
                                trendingProduct.map((curElm)=>{
                                    return(
                                        <>
                                        <div className="box">
                                            <div className="img_box">
                                                <img src={curElm.image} alt=""></img>
                                                <div className="icon">
                                                    <div className="icon_box">
                                                        <FaEye />
                                                    </div>
                                                    <div className="icon_box">
                                                        <MdFavoriteBorder />                                                    
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h3>{curElm.Name}</h3>
                                                <p>${curElm.price}</p>
                                                <button  className="btn" onClick={()=> addtocart (curElm)}>Add to Cart</button>
                                            </div>
                                        </div>                                        
                                        </>
                                    )
                                }                                                                    
                            )}

                        </div>
                        <button><Link to="/shop">Show More</Link></button>

                        </div>
                    </div>
                    <div className="right_box">
                        <div className="right_container">
                            <div className="testimonial">
                                <div className="head">
                                    <h3>Our Testimonials</h3>
                                </div>
                                <div className="details">
                                    <div className="image">
                                        <img src="image/T1.avif" alt="testimonial"/>
                                    </div>
                                    <div className="info">
                                        <h3>Melina Smith</h3>
                                        <h4>Web Designer</h4>
                                        <p>lorem posum texttxtxtxtx random text hey hello how is it going man hey hey hey</p>
                                    </div>
                                </div>
                            </div>
                            <div className="newsletter">
                             <div className="head">
                                <h3>newsletter</h3>
                            </div>
                            <div className="form">
                                <p>Join our mailing list!</p>
                                <input type="email" placeholder="email" autoComplete="off" />
                                <button type="submit">Submit</button>
                                <div className="icon_box">
                                    <div className="icon">
                                     <FaFacebook />                                    
                                    </div>
                                    <div className="icon">
                                        <FaTwitter />
                                    </div>
                                    <div className="icon">                              
                                        <FaInstagram />
                                    </div>
                                    <div className="icon">                              
                                       <FaYoutube />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
        </div>
        <div className="banners">
        <div className="container">
                <div className="left-box">
                    <div className="box">
                        <img src="image/Multi-Banner-1.avif" alt="banner"></img>
                    </div>
                    <div className="box">
                        <img src="image/Multi-banner-2.avif" alt="banner"></img>
                    </div>
                </div>
                <div className="right_box">
                    <div className="top">
                        <img src="image/Multi-Banner-3.webp"  alt=""></img>
                        <img src="image/Multi-banner-4.avif" alt=""></img>
                    </div>
                    <div className="bottom">
                        <img src="image/Multi-Banner-5.webp" alt="banner"></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="product_type">
            <div className="container">
                <div className="box">
                    <div className="header">
                        <h2>New Product</h2>
                    </div>
                    {
                        newProduct.map((curElm)=>
                        {
                            return(
                                <>
                                <div className="productbox">
                                    <div className="img_box">
                                        <img src={curElm.image} alt=""></img>
                                    </div>
                                    <div className="details">
                                        <h3>{curElm.Name}</h3>
                                        <p>${curElm.price}</p>
                                        <div className="icon">
                                            <button ><FaEye /></button>
                                            <button><MdFavoriteBorder /> </button>
                                            <button onClick={()=> addtocart(curElm)}><FaShoppingCart /></button>

                                        </div>
                                    </div>
                                </div>                                
                                </>
                            )
                        })

                    }
                </div>
                <div className="box">
                    <div className="header">
                        <h2>Featured Product</h2>
                    </div>
                    {
                        featuredProduct.map((curElm)=>
                        {
                            return(
                                <>
                                <div className="productbox">
                                    <div className="img_box">
                                        <img src={curElm.image} alt=""></img>
                                    </div>
                                    <div className="details">
                                        <h3>{curElm.Name}</h3>
                                        <p>${curElm.price}</p>
                                        <div className="icon">
                                            <button ><FaEye /></button>
                                            <button><MdFavoriteBorder /> </button>
                                            <button onClick={()=> addtocart(curElm)} ><FaShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>                                
                                </>
                            )
                        })

                    }
                </div>
                <div className="box">
                    <div className="header">
                        <h2>Top Product</h2>
                    </div>
                    {
                        topProduct.map((curElm)=>
                        {
                            return(
                                <>
                                <div className="productbox">
                                    <div className="img_box">
                                        <img src={curElm.image} alt=""></img>
                                    </div>
                                    <div className="details">
                                        <h3>{curElm.Name}</h3>
                                        <p>${curElm.price}</p>
                                        <div className="icon">
                                            <button ><FaEye /></button>
                                            <button><MdFavoriteBorder /> </button>
                                            <button onClick={()=> addtocart(curElm)} ><FaShoppingCart /></button>
                                        </div>
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
        </>
    )
}
export default Home;            