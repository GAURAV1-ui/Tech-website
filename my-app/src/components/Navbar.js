import React from 'react'

const Navbar = () => {
  return (
    <div>
    <header>
  <div className="box"></div>
  <div className="curve">
    <div className="left"><div></div></div>
    <div className="center"></div>
    <div className="right"><div></div></div>
  </div>
</header>
<footer>
  <div className="curve">
    <div className="left"><div></div></div>
    <div className="center"></div>
    <div className="right"><div></div><div><a href="/"><i className="fab fa-facebook-f"></i></a><a href=""><i className="fab fa-instagram"></i></a><a href=""><i className="fab fa-twitter"></i></a><a href="/"><i className="fas fa-envelope"></i></a></div></div>
  </div>
  <div className="box"></div>
</footer>
</div>
  )
}

export default Navbar