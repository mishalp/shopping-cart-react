import React, { useState, useEffect } from 'react'
import products from '../../product'
import { Link } from "react-router-dom";
import './shope.css'


const CardBuilder = (props)=>{
  let dollarIndianLocale = Intl.NumberFormat('en-IN');

  const addToCart = (e)=>{
    e.preventDefault();
    e.stopPropagation()
    props.addToCart(e.target.dataset.id)
  }
  return(
    <div className="cards">
      {props.product.map((item)=>{
        return <Link to={`/product/${item.id}`} key={item.id}>
          <div className="card">
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <div>
              <button data-id={item.id} onClick={addToCart}>Add to Cart</button>
              <h6>₹{dollarIndianLocale.format(item.price)}</h6>
            </div>
          </div>
        </Link>
      })}
    </div>
  )
}

function Shope(props) {

  const addToCart = (index)=>{
    let temp = props.cart;
    let flag = false;
    props.cart.forEach((item, id)=>{
      if(item.id == index){
        flag = true
        temp[id].piece++;
        props.updateCart([...temp])
      }
    })

    if(!flag){
      temp = temp.concat(products[index])
      props.updateCart([...temp])
    }
    
  }

  return (
    <div className='products'>
      <h1>Prouducts</h1>
        <CardBuilder product={products} addToCart={addToCart} />
    </div>
  )
}

export default Shope
