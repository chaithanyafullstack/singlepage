import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Navbar from './Navbar'
import {Route,Routes}from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home'Component={Home}/>
        <Route path='/contact'Component={Contact}/>
        <Route path='/about'Component={About}/>
      </Routes>
    </div>
  )
}

export default App