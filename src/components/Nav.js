import React from "react";
import {  Link , } from 'react-router-dom';


function Nav(props) {
  return (

    // <Link to="/" className='nav-item'>HomePage</Link>

    <>
    
      <nav className={props.className}>
        <ul className="nav-list">
          <li className="nav-item" >
            <Link to="/" className='nav-item' >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-item">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-item">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reservations" className="nav-item">
              Reservations
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/order-online" className="nav-item">
              Order Online
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-item">
              Login
            </Link>
          </li>
        </ul>
      </nav>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </>
  );
}

export default Nav;
