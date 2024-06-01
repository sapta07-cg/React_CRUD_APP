 import {NavLink} from 'react-router-dom'
// import {Navbar,Container,Nav} from 'react-bootstrap'
import { useState } from 'react'

import "./styles/AppNavBar.css"


const AppNavBar = () => {

    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <>
    <div className='container-fluid'>
    <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            RECORD DESK
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                activeClassName="active"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-links"
                activeClassName="active"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/admin"
                className="nav-links"
                activeClassName="active"
              >
                ADMIN
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

    </div>
      
    </>
  )
}


export default AppNavBar
