import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <NavLink exact to='/'>Home</NavLink>
      <button>About</button>
      <button>Refresh</button>
      <button>Save</button>
      <NavLink to='/your-sets'>Your Sets</NavLink>
    </header>
  )
}

export default Header