import React, {useRef, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './MenuButton.scss'

const hideToggle = {
  transform: 'translateX(-100%)',
  height: 0,
  width: 0,
  overflow: "hidden"
}
const hideNone = {
  transform: 'translateX(0%)'
}
const Menu = ({ open, setOpen }) => {

  return (
    <div className="menu-container" onClick={() => setOpen(!open)} style={open ? hideNone : hideToggle } >
      <Link to="/"   >
        <span className="menu-options"  aria-label="Data Visuals">Homepage </span>
      </Link>
      <Link to="/gridcss"   >
        <span className="menu-options"  aria-label="Data Visuals">CSS Grid </span>
      </Link>
      <Link to="/"   >
        <span className="menu-options"    aria-label="Art">Websites </span>
      </Link>
      <Link to="/contact"    >
        <span   className="menu-options"   aria-label="Web developer"> Contact </span>
      </Link>
    </div>
  )
}

const flipR = {
	transform: 'rotate(45deg)',
}
const flipL = {
	transform: 'rotate(-45deg)',

}
const leave = {
	opacity: 0
}
const normal = {
	transform: 'rotate(0)',
	opacity: 1,
	background: '#D6D7DD'
}

const Burger = ({ open, setOpen }) => {

  return (
    <div className="burger-menu" onClick={() => setOpen(!open)}>
      <div style={open ? flipR : normal } />
      <div style={open ? leave : normal} />
      <div style={open ? flipL : normal} />
    </div>
  )
}


const MenuButton = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  
  return (
    <div>
      <div  ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open}   setOpen={setOpen} />
      </div>
      
    </div>
  )  
}

export default MenuButton;