import React from 'react'
import { useParams } from 'react-router-dom'
import './productInfo.css'

function ProductInfo(props) {
    let {id} = useParams();
    const item = props.products[id];

    const addToCart = (e)=>{
        e.preventDefault();
        e.stopPropagation()
        const index = e.target.dataset.id;
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
          temp = temp.concat(props.products[index])
          props.updateCart([...temp])
        }
      }
  return (
    <div className="product-info">
        <div className="main-info">
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <div className="info-body">
                <ul>
                    {item.desc.map((info, index)=>{
                        return <li key={index}>{info}</li>
                    })}
                </ul>
                <button data-id={item.id} onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductInfo