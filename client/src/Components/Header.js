import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "./Style/Components.css";


function Header() {
  return (


  <div className="Header">
      <ul>
          <li>
              <Link activeClassName="active" isActive={()=> window.location.name === "/Home"} to="/Home">
              Home
              </Link>
          </li>
          <li>
              <Link activeClassName="active" isActive={()=> window.location.name === "/Doctor"} to="/Doctor">
              Find a Doctor
              </Link>
          </li>
          <li>
              <Link activeClassName="active" isActive={()=> window.location.name === "/Login"} to="/Login">
              Login
              </Link>
          </li>

      </ul>
</div>


  );
}
export default Header;