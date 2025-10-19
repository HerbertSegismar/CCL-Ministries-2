import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/CityCrossLogoBlue.svg'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-5 bg-red-400'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/'>Prayer Request</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
      </div>
  );
};

export default Navbar;
