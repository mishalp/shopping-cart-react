import React, { useState } from "react";
import './cart.css'


const Cart = (props) => {
    console.log(props.cart);
    let dollarIndianLocale = Intl.NumberFormat('en-IN');

    const incrementCount = (e) => {
        let temp = props.cart;
        temp[e.target.dataset.index].piece += 1;
        props.updateCart([...temp])

    }

    const decrementCount = (e) => {
        let temp = props.cart;
        if (temp[e.target.dataset.index].piece == 1) {
            removeItem(e)
            return;
        }
        temp[e.target.dataset.index].piece -= 1;
        props.updateCart([...temp])

    }

    const removeItem = (e) => {
        let temp = props.cart;
        temp.splice(e.target.dataset.index, 1)
        props.updateCart([...temp])
        console.log(temp);
    }
    let title  = props.cart.length != 0 ? 'Your cart' : 'Your Cart is empty'
    console.log(props.cart);
    return (
        <div className="cart">
        <div className="items">
             <h1>{title}</h1>
            <div className="cartList">
                {props.cart.length != 0
                 && props.cart.map((item, index) => {
                    return (
                        <div className="item" key={item.id}>
                            <img src={item.image} alt="" />
                            <div className="info">
                                <h2>{item.name}</h2>
                                <div className="controls">
                                    <button data-index={index} onClick={decrementCount}>-</button> <span>{item.piece}</span> <button onClick={incrementCount} data-index={index}>+</button>
                                </div>
                                <h2>${dollarIndianLocale.format(item.price)}</h2>
                                <button className="remove-btn" onClick={removeItem} data-index={index}>Remove</button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
        {props.cart.length != 0 &&
        <div className="order-summery">
            <h1>Order Summery</h1>
            <div className="order-info">
            <p>Total items: {props.cart.length > 0 && props.cartCount}</p>
            <p>Total Amount: ₹{props.cart.length > 0 && dollarIndianLocale.format(props.total) }</p>
         </div>
          </div>
        }
            
        </div>
    )
}

export default Cart