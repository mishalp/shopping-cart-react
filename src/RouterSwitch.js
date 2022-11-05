import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Shope from './components/shope/Shope';
import './style.css';

function RouterSwitch() {
  return (
    <div className='main'>

      <BrowserRouter>
        <nav>
          <div className="title">Shopping Cart</div>
          <div className="navMenu">
            <Link to='/'>Home</Link>
            <Link to='/shope'>Shope</Link>
            
          </div>
        </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shope' element={<Shope />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterSwitch