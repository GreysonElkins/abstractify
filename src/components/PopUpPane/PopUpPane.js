import React, { Component } from "react";
import './PopUpPane.scss'

class PopUpPane extends Component {
  render() {
    return (
      <div class="pop-module">
        <header>
          <div role="banner">About section</div>
          <div 
            role="button" 
            class="close" 
            onClick={this.props.hide}
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
  
  determineBody = ({ show }) => {
    if (show === 'about') {
      return (
        <p>
          Abstractify is a moodboard for Abstract Painters 
          looking for inspiration! <br /> Put it on and click 
          around till you feel something and then leave it up 
          in the periphery - get making!
        </p>
      ) 
    }
  } 
}


export default PopUpPane;
