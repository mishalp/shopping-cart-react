import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Shope from './components/shope/Shope';
import Cart from './components/cart/Cart';
import './style.css';
import cartimg from './images/cart.png'


function RouterSwitch() {

  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    let temp = 0;
    let count = 0;

    if(cart.length != 0){
      setTotal(calculateTotal(cart))
    }

    if(cart != []){
      cart.forEach(item=>{
        temp = temp + item.price
        count = count + item.piece
      })
      setCartCount(count)
    }else{
      setCartCount(0)
    }

  }, [cart])

  const calculateTotal = (cart)=>{
    if(cart[0] == null) return
      var amount = cart.reduce((all, item)=>{
        return all + (item.price * item.piece)
      }, 0)
      console.log(amount);
      return amount;
  }

  return (
    <div className='main'>

      <BrowserRouter main>
        <nav>
          <div className="title">Shopping Cart</div>
          <div className="navMenu">
            <Link to='/'>Home</Link>
            <Link to='/shope'>Shope</Link>
            <Link to='/cart'><img src={cartimg} alt="" /><div className="badge">{cartCount}</div></Link>
            
          </div>
        </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shope' element={<Shope cart={cart} updateCart={setCart} />} />
        <Route path='cart' element={<Cart cart={cart} cartCount={cartCount} total={total} updateCart={setCart} />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterSwitch