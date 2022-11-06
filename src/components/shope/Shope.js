import React, { useState, useEffect } from 'react'
import products from '../../product'
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
        return <a href="#" key={item.id}>
          <div className="card">
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <div>
              <button data-id={item.id} onClick={addToCart}>Add to Cart</button>
              <h6>₹{dollarIndianLocale.format(item.price)}</h6>
            </div>
          </div>
        </a>
      })}
    </div>
  )
}

function Shope(props) {

  const [total, setTotal] = useState(0)

  useEffect(()=>{
    console.log(props.cart);
    if(props.cart.length != 0){
      setTotal(calculateTotal(props.cart))
    }
  }, [props.cart])

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

  const calculateTotal = (cart)=>{
      var amount = cart.reduce((all, item)=>{
        return all + (item.price * item.piece)
      }, 0)
      console.log(amount);
      return amount;
  }

  return (
    <div className='products'>
      <h1>Prouducts</h1>
        <CardBuilder product={products} addToCart={addToCart} />
    </div>
  )
}

export default Shope
