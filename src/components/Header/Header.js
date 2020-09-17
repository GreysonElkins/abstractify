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

  randomInterval = (max = 4000, min = 1000) => {
    return Math.random() * (max - min) + min
  }
m
  loadTitle = () => {
    let startingTitle = []
    for (let i = 0; i < 11; i++){
      const letterLimit = letterOptions[i].length
      startingTitle.push(letterOptions[i][this.randomIndex(letterLimit)])
    }
    this.setState({title: startingTitle})

    startingTitle.forEach( async (letter, i) => {
      const letterLimit = letterOptions[i].length
      setTimeout(() => {

        for (let j = 0; j < this.randomIndex(4); j++) {
          setTimeout(() => {
            const updatingTitle = this.state.title
            updatingTitle[i] = letterOptions[i][this.randomIndex(letterLimit)]
            this.setState({ title: updatingTitle })
            setTimeout(() => {
              const finalizingTitle = this.state.title
              finalizingTitle[i] = letterOptions[i][0]
              this.setState({ title: finalizingTitle })
              // this.glitchLetter()
              // this.glitchLetter()
            }, j === 0 ? this.randomInterval(800): this.randomInterval())
          }, this.randomInterval(1000))
        }
        
      }, this.randomInterval(800, 400))
    })

  }

  glitchLetter = () => {
    const index = this.randomIndex(11)
        const glitchTitle = this.state.title
        const letterLimit = () => {
          return letterOptions[index.toString()].length
        }
        glitchTitle[parseInt(index)] =
          letterOptions[index.toString()][this.randomIndex(letterLimit())];
        this.setState({ title: glitchTitle })
        setTimeout(() => {
          const fixTitle = this.state.title
          fixTitle[parseInt(index)] = letterOptions[index][0]
          this.setState({ title: fixTitle })
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