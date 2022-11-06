import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Shope from './components/shope/Shope';
import Cart from './components/cart/Cart';
import './style.css';
import cartimg from './images/cart.png'


function RouterSwitch() {

  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([])

  useEffect(()=>{
    let temp = 0;
    let count = 0;
    cart.forEach(item=>{
      temp = temp + item.price
      count = count + item.piece
    })
    setCartCount(count)
  }, [cart])
  return (
    <div className='main'>

      <BrowserRouter>
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
        <Route path='cart' element={<Cart cart={cart}  updateCart={setCart} />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterSwitch