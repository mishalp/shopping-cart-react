import React, {useState} from "react";
import './cart.css'


const Cart = (props)=>{
    console.log(props.cart);
    return(
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="cartList">
            {props.cart.map(item=>{
                return(    
                <div className="item" key={item.id}>
                    <img src={item.image} alt="" />
                    <div className="info">
                        <h2>{item.name}</h2>
                        <div className="controls">
                            <button>-</button> <span>{item.piece}</span> <button>+</button>
                        </div>
                        <h3>${item.price}</h3>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default Cart