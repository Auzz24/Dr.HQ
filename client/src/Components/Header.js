import React from 'react';
import {Link} from 'react-router-dom';
import Auth from '../utils/auth'
import "./Style/Components.css";


function Header() {
  return (


  <div className="Header">
      <ul>
          <li>
              <Link to="/Home">
              Home
              </Link>
          </li>
          <li>
              <Link to="/AllDoctors">
              Find a Doctor
              </Link>
          </li>
          <li>
              {
              Auth.loggedIn()?
              (<Link to="#" onClick={() => {
                  Auth.logout()
              }}>
              Logout
              </Link>):
              (<Link to="/Login">
              Login
              </Link>)
            }
          </li>

      </ul>
</div>


  );
}
export default Header;