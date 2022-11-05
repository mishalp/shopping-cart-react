import React, { useState, useEffect } from 'react'
import products from '../../product'
import './shope.css'



const CardBuilder = (props)=>{
  let dollarIndianLocale = Intl.NumberFormat('en-IN')
  return(
    <div className="cards">
      {props.product.map((item)=>{
        return <a href="#" key={item.id}>
          <div className="card">
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            
            <div>
              <button data-id={item.id} onClick={props.addToCart}>Add to Cart</button>
              <h6>₹{dollarIndianLocale.format(item.price)}</h6>
            </div>
          </div>
        </a>
      })}
    </div>
  )
}

function Shope(props) {

  const [cart, updateCart] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    console.log(cart);
    let temp = 0;
    let count = 0;
    cart.forEach(item=>{
      temp = temp + item.price
      count++
    })
    props.updateCartCount(count)
    console.log(temp);

  }, [cart])

  const addToCart = (e)=>{
    console.log(e.target.dataset.id);
    var index = e.target.dataset.id;
    let temp = cart;
    let flag = false;
    console.log(index);
    cart.forEach((item, id)=>{
      if(item.id == index){
        flag = true
        temp[id].piece++;
        updateCart([...temp])
      }
    })


    if(!flag){
      temp = temp.concat(products[index])
      updateCart([...temp])
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