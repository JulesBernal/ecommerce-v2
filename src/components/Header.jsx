import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Navbar.scss'
export default function Header(props) {
  let activeStyle={
    textDecoration:"underline",
    background:"#00ffff",
    color:"#5600ef"
};
// console.log(props.data)
  return (
    <header>
      <nav>
        <ul className={props.data ? 'theme' : '' } >
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
          </li><li>
            <NavLink
              to='/cart'
              style={({ isActive })=>
                isActive ? activeStyle:undefined}
              >Cart {props.leemur.length}
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
