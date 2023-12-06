import React from 'react'
import {Link}from 'react-router-dom'
import './practice.css'

const Navbar = () => {
  return (
    <div className='head'>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/home'>Home</Link>
    </div>
  )
}

export default Navbar