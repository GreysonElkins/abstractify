import React, { Component } from "react";
import './PopUpPane.scss'

class PopUpPane extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  render() {
    return (
      <div className="pop-module">
        <header id="popup" className={this.props.isGaudy ? "" : "mono-pop"}>
          <h2>{this.props.show}</h2>
          <div 
            role="button" 
            className="close" 
            onClick={() => {
              const fix = this.props.show === 'About' ? 5 : 2;
              this.props.hide(fix)
            }}
            tabIndex="0"
          >
            𝕏
          </div>
        </header>
        <main>
          {this.determineBody(this.props)}
        </main>
      </div>
    );
  }
  
  determineBody = ({ show, isGaudy }) => {
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
        <p className={isGaudy ? "" : "mono-pop"}>
          Pick a name for this set!
        </p>
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
    }
  }
  
  updateInput = (event) => {
    this.setState({title: event.target.value})
  }

  attemptSave = () => {
    if(this.state.title !== '') {
      this.props.save(this.state.title)
      this.props.hide(2)
    }
  }
}

export default PopUpPane;