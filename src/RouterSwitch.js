import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Shope from './components/shope/Shope';
import './style.css';
import cart from './images/cart.png'


function RouterSwitch() {

  const [carCount, setCartCount] = useState(0);
  const updateCart = (count)=>{
    console.log(count);
  }
  return (
    <div className='main'>

      <BrowserRouter>
        <nav>
          <div className="title">Shopping Cart</div>
          <div className="navMenu">
            <Link to='/'>Home</Link>
            <Link to='/shope'>Shope</Link>
            <Link to='/cart'><img src={cart} alt="" /><div className="badge">2</div></Link>
            
          </div>
        </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shope' element={<Shope  updateCartCount={updateCart} />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterSwitch