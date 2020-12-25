import React from 'react';
import {Link ,NavLink} from 'react-router-dom';
import { FaUserPlus } from "react-icons/fa";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">React JS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <div className="mr-auto"></div>
      <ul className="navbar-nav">
     
        <li className="nav-item">
          <NavLink className="nav-link"  exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        
          <NavLink className="nav-link" exact to="/about">About</NavLink>
            
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/services">Serivces</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
        </li>
       
       
      </ul>
    </div>
    <Link to="/users/add"><button className="btn btn-outline-light ml-2"><FaUserPlus/></button></Link>
  </div>
</nav>
        </div>
    )
}

export default Navbar;
