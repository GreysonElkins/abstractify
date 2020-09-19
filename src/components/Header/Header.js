import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import './toggle.scss'

const Header = ({ title, isGaudy, toggleGaudy, showPopUp, refresh, glitch, page}) => {
    return (
      <header role="heading" className={isGaudy ? "" : "mono"}>
        <div>
          <span role="banner" onClick={glitch} className="title" tabIndex="0">
            {title.join("")}
          </span>
        </div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" onClick={toggleGaudy}></span>
        </label>
        <span className="toggleLabel">gaudy mode</span>
        <nav>
          <NavLink
            exact
            to="/"
            className="inactive-link"
            activeClassName="active-link"
            onClick={glitch}
          >
            Home
          </NavLink>
          <button
            title="About Abstractify"
            onClick={() => {
              showPopUp('About', 5)
            }}
          >
            About
          </button>
          {page !== '/your-sets' 
            && <>
              <button
                title="Refresh image set"
                onClick={() => {
                  refresh();
                }}
              >
                Refresh
              </button>
              <button
                title="Save this image set"
                onClick={() => {
                  showPopUp('Save', 2)
                  glitch(true)
                }}
              >
                Save
              </button>
            </>
          }
          <NavLink
            to="/your-sets"
            className="inactive-link"
            title="See your saved image sets"
            activeClassName="active-link"
            onClick={() => {
              glitch(true);
            }}
          >
            Your Sets
          </NavLink>
        </nav>
      </header>
    );
}

export default Header

Header.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string),
  isGaudy: PropTypes.bool.isRequired,
  toggleGaudy: PropTypes.func.isRequired,
  showPopUp: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  glitch: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
}