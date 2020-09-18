import React, { Component } from 'react'
import padlock from '../../images/padlock.svg'
import unlock from '../../images/unlock.svg'

class ImagePanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  fade() {
    if (this.state.hover) {
      return 0.2
    } else {
      return 1
    }
  }

  render() {
    return (
      <>
        {/* <div className="panel"> */}
          <img
            style={{opacity: this.fade()}}
            className="image"
            key={this.props.image.id}
            alt={`Photographed by ${this.props.image.photographer.name}`}
            src={this.props.image.url}
            id={this.props.image.id}
            onMouseEnter={() => this.setState({hover: true})}
            onMouseLeave={() => this.setState({hover: false})}
            onClick={() => this.props.toggleImageLock(this.props.image.id)}
          />
          {this.state.hover &&
            <img 
              id={`${this.props.image.id}-lock`} 
              className="lock"
              title="Prevent this image from reloading"
              src={this.props.image.locked ? padlock : unlock}
              alt={this.props.image.locked ? 'A locked padlock icon' : 'An unlocked padlock icon'} 
            />
          }
      </>
    ); 
  }
}

export default ImagePanel