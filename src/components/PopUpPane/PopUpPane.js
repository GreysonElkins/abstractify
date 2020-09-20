import React, { Component } from "react";
import PropTypes from 'prop-types'
import './PopUpPane.scss'

class PopUpPane extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      message: '',
    }
  }

  render() {
    return (
      <div className="pop-module">
        {this.makeHeader(this.props)}
        <main>
          {this.determineBody(this.props)}
        </main>
      </div>
    );
  }

  makeHeader = ({ isGaudy, show, errorMessage, hide }) => {
    return (
      <header id="popup" className={isGaudy ? "" : "mono-pop"}>
        <h2>{show}</h2>
        {!errorMessage && (
          <div
            role="button"
            className="close"
            onClick={() => {
              const fix = show === "About" ? 5 : 2;
              hide(fix);
            }}
            tabIndex="0"
          >
            𝕏
          </div>
        )}
      </header>
    );
  }
  
  determineBody = ({ show, isGaudy, errorMessage }) => {
    if (show === 'About') {
      return (
        <div className={isGaudy ? "pop-body" : "pop-body-mono"}>
          <p className={isGaudy ? "" : "mono-pop"}>
            Abstractify is a mood board for Abstract Painters looking for
            inspiration! <br /> Put it on and click around till you feel
            something and then leave it up in the periphery - get making!
          </p>
          <button
            onClick={(event) => {
              event.preventDefault();
              this.props.hide(5);
            }}
          >
            Close
          </button>
        </div>
      ); 
    } else if (show === 'Save') {
      return (
      <div className={isGaudy ? "pop-body" : "pop-body-mono"}>
        <p className={isGaudy ? "" : "pop-body-mono"}>
          Pick a name for this set! <br />
        </p>
          {this.state.message 
            && (
              <span className="error-message">
                {this.state.message}
              </span>
            )
          }
        <form onSubmit={(event) => {
          event.preventDefault()
          this.attemptSave()
        }}>
        <input 
          type="text"
          placeholder="title"
          name="title"
          onChange={this.updateInput}
        />
        <br /><button>Save</button>
        </form>
      </div>
      )
    } else if (errorMessage) {
      return (
        <div className={isGaudy ? "pop-body" : "pop-body-mono"}>
          <p className={isGaudy ? "" : "mono-pop"}>
            {errorMessage}
          </p>
        </div>
      );
    }
  }
  
  updateInput = (event) => {
    this.setState({title: event.target.value, message: ''})
  }

  attemptSave = () => {
    if(this.state.title !== '') {
      this.props.save(this.state.title)
      this.props.hide(2)
    } else {
      this.setState({
        message: 'You have to give the set a name!'
      })
    }
  }
}

export default PopUpPane;

PopUpPane.propTypes = {
  show: PropTypes.string.isRequired,
  hide: PropTypes.func.isRequired,
  save: PropTypes.func,
  isGaudy: PropTypes.bool.isRequired
}