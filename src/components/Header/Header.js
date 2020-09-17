import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.scss'

class Header extends Component {
  constructor() {
    super() 
      this.state = {
        title: ['^','3','5','/','4','^','[','/','!','"','v']
      }
  }

  render() {
    return (
      <header>
        <Link to="/" className="title">
          <span className="title" tabIndex="0">
            {this.state.title.join('')}
          </span>
        </Link>
        <nav>
          <NavLink
            exact
            to="/"
            className="inactive-link"
            activeClassName="active-link"
          >
            Home
          </NavLink>
          <button title="About Abstractify">About</button>
          <button title="Refresh image set">Refresh</button>
          <button title="Save this image set">Save</button>
          <NavLink
            to="/your-sets"
            className="inactive-link"
            title="See your saved image sets"
            activeClassName="active-link"
          >
            Your Sets
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header