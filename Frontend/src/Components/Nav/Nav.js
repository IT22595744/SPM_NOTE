import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (
    <div>
       <ul className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      {/* <img  src={logo} alt='logo'></img> */}
        <li className="home-li">
            <Link to="/mainhome" className="activehome-a">
            <h1>Home</h1></Link>
        </li>
        
        <li className="home-li">
        <Link to="/addnote" className="activehome-a">
            <h1>Add Note</h1></Link>
        </li>
        <li className="home-li">
        <Link to="/notedetails" className="activehome-a">
            <h1>Note details</h1></Link>
        </li>
        </ul>
    </div>
  );
}

export default Nav;
