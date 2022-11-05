import React from 'react'
import products from '../../product'
import './shope.css'

const CardBuilder = (props)=>{
  return(
    <div className="cards">
      {props.product.map((item)=>{
        return <a href="#">
          <div className="card">
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <h6>{item.cost} ₹</h6>
            <a href="#"><button>Add to Cart</button></a>
          </div>
        </a>
      })}
    </div>
  )
}

function Shope() {
  return (
    <div className='products'>
      <h1>Prouducts</h1>
        <CardBuilder product={products} />
    </div>
  )
}



export default Shope