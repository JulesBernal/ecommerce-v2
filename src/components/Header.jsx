import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Navbar.scss'
export default function Header() {
  let activeStyle={
    textDecoration:"underline",
    background:"#00ffff",
    color:"#5600ef"
};
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              style={({ isActive })=>
                isActive ? activeStyle:undefined}
              >Home
              </NavLink>
          </li>
          <li>
            <NavLink
              to='/shop'
              style={({ isActive })=>
                isActive ? activeStyle:undefined}
              >Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              style={({ isActive })=>
                isActive ? activeStyle:undefined}
              >Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
