import React from 'react'
import Models from '../Models/Model,';
import './Navbar.css';
const Navbar = () => {
  
  return (
    <div>
    <header className='ready'>
  <div className="box"></div>
  <div className="curve">
    <div className="left">
      <div>
        
        </div></div>
    <div className="center">
    {/* <div><h1 style={{color: "white"}}>TechFest</h1>
    </div> */}
    </div>
    
    <div className="right"><div></div></div>
  </div>
</header>
<Models/>
<footer className='ready'>
  <div className="curve">
    <div className="left"><div></div></div>
    <div className="center"></div>
    
    <div className="right">
      <div>
      </div>
      {/* <div>
        <a>
          <i className="fab fa-facebook-f"></i>
          </a>
          <a >
            <i className="fab fa-instagram"></i>
            </a>
            <a >
              <i className="fab fa-twitter"></i></a>
              <a>
                <i className="fas fa-envelope"></i></a></div> */}
                </div>
  </div>
  <div className="box"></div>
</footer>
</div>
  )
}

export default Navbar