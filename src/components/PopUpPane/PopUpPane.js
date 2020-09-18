import React, { Component } from "react";
import './PopUpPane.scss'

class PopUpPane extends Component {
  render() {
    return (
      <div className="pop-module">
        <header id="popup" className={this.props.isGaudy ? "" : "mono-pop"}>
          <h2>{this.props.show}</h2>
          <div 
            role="button" 
            className="close" 
            onClick={this.props.hide}
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
    if (show === 'about') {
      return (
        <p className={isGaudy ? "" : "mono-pop"} >
          Abstractify is a mood board for Abstract Painters 
          looking for inspiration! <br /> Put it on and click 
          around till you feel something and then leave it up 
          in the periphery - get making!
        </p>
      ) 
    }
  } 
}


export default PopUpPane;
