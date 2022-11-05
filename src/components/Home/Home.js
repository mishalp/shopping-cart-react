import React from 'react';
import './home.css'
import right from '../../images/right.jpg';

function Home() {
  return (
    <div className='home'>
        <div className="left">
            <p className="sub">No.1 Shopping Cart in the world</p>
            <p className="caption">
              We have Everything you want, come be Amazed
            </p>
        <div><a href="/shope"><button>Shope Now</button></a></div>
        </div>
        <div className="right">
          <img src={right} alt="" />
        </div>
    </div>
  )
}

export default Home