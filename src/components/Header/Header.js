import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import './slider.scss'

    const letterOptions = {
      0: ["A", "^", "@", "ˆ"],
      1: ["B", "3", "ß"],
      2: ["S", "5", "§", "š"],
      3: ["T", "†", "#"],
      4: ["R", "®", "&"],
      5: ["A", "^", "@", "ˆ"],
      6: ["C", "©", "[", "{", "(", "¢"],
      7: ["T", "†", "#"],
      8: ["I", "!", "1", "|", "/", "¦"],
      9: ["F", "=", "±", "?", "#", "ƒ", "‡"],
      10: ["Y", "Ÿ", "µ", "¥"],
    };

class Header extends Component {
  constructor() {
    super()
      this.state = {
        title: [],
        gaudyMode: true
      }
  }

  componentDidMount() {
    this.loadTitle()
  }

  randomIndex = (limit) => {
    let index = Math.floor(Math.random() * (limit - 2) + 1) 
    return index.toString()
  }

  randomInterval = (max = 3000, min = 200) => {
    return Math.random() * (max - min) + min
  }
m
  loadTitle = () => {
    for (let i = 0; i < 11; i++){
      this.glitchLetter(false, i)
        for (let j = 0; j < this.randomIndex(4); j++) {
          setTimeout(() => {
            this.glitchLetter(false, i)
            this.glitchLetter(true, i)
          }, this.randomInterval(j === 0 ? 1000 : undefined))
        }
    }
  }

  glitchLetter = (fix, index = this.randomIndex(11)) => {
    const glitchTitle = this.state.title
    const letterLimit = () => {
      return letterOptions[index.toString()].length
    }
    glitchTitle[parseInt(index)] =
      letterOptions[index.toString()][this.randomIndex(letterLimit())];
    this.setState({ title: glitchTitle })
    if (fix) this.correctLetter(index)
  }

  correctLetter = (index) => {
    setTimeout(() => {
      const fixTitle = this.state.title
      fixTitle[parseInt(index)] = letterOptions[index][0]
      this.setState({ title: fixTitle})
    }, this.randomInterval())
  }

  toggleGaudy = () => {
    this.setState({ gaudyMode: this.state.gaudyMode ? false : true })
  }

  render() {
    return (
      <header role="heading" className={!this.state.gaudyMode ? "mono" : ""}>
        <div onClick={this.glitchLetter}>
          <span role="banner" className="title" tabIndex="0">
            {this.state.title.join("")}
          </span>
        </div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" onClick={this.toggleGaudy}></span>
          </label>
          <span className="toggleLabel">
            gaudy mode
          </span>
        <nav>
          <NavLink
            exact
            to="/"
            className="inactive-link"
            activeClassName="active-link"
            onClick={this.glitchLetter}
          >
            Home
          </NavLink>
          <button title="About Abstractify" onClick={this.glitchLetter}>
            About
          </button>
          <button 
            title="Refresh image set" 
            onClick={() => {
              this.props.refresh()
              this.glitchLetter() 
            }}
          >
            Refresh
          </button>
          <button title="Save this image set" onClick={this.glitchLetter}>
            Save
          </button>
          <NavLink
            to="/your-sets"
            className="inactive-link"
            title="See your saved image sets"
            activeClassName="active-link"
            onClick={this.glitchLetter}
          >
            Your Sets
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header