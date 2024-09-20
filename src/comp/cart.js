import React from "react";
import "./cart.css"
import { Link } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";

const Cart =({cart, setCart})=> {
    // INCREASE QTY
    const incqty = (product)=>{

        const exist= cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>{

            return curElm.id === product.id ? {...exist, qty: exist.qty+1}: curElm;
        }))
    }
    // DECREASE QTY
    // DECREASE QTY
const decqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {

        setCart(cart.filter((curElm) => curElm.id !== product.id));
    } else {

        setCart(cart.map((curElm) => 
            curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm
        ));
    }
}

    // FOR DELETING AN PRODUCT
    const removeprod =(product)=> 
        {
            const exist = cart.find((x)=>
                {
                   return x.id === product.id
                })
                if(exist.qty>0){
                    setCart(cart.filter((curElm)=>{
                         return curElm.id !== product.id
                    }))
                }        
    }
    // TOTAL PRICE
    const total = cart.reduce((price,item)=> price + item.qty * item.price , 0)
    return(
        <>
        <div className="cart">
                {
                    cart.length === 0 &&
                    <>
                    <div className="empty_cart">
                        <h2>Your shopping Cart is Empty</h2>
                        <Link to='/shop'><button>Shop now</button></Link>                    
                    </div>
                    </>
                }
            <div className="container">
                {
                    cart.map((curElm)=>
                        {
                        return (
                            <>
                           <div className="box">
                                <div className="img_box">
                                    <img src={curElm.image} alt="product photo"/>
                                </div>
                                <div className="details">
                                  <div className="info">
                                    <h4>{curElm.cat}</h4>
                                    <h3>{curElm.Name}</h3>
                                    <p>Price: ${curElm.price}</p>
                                    <p>Total: {curElm.price*curElm.qty}</p>
                                </div>                            
                                <div className="quantity">
                                    <button onClick={()=> incqty(curElm)}>+</button>
                                    <input type="number" value={curElm.qty} />
                                    <button onClick={()=> decqty(curElm)}>-</button>
                                </div> 
                                <div className="icon">
                                    <li onClick={()=> removeprod(curElm)}><IoTrashBin /></li>
                                </div>  
                                </div>                         
                            </div>
                            </>
                        )            
                    })

                }
            </div>
            <div className="bottom">
               {
                cart.length > 0 &&
                <>
                 <div className="total">
                    <h5>Total: ${total}</h5>
                 </div>            
                 <button>Checkout</button>    
                </>
               }
            </div>
        </div>
        </>
    )
}
export default Cart;