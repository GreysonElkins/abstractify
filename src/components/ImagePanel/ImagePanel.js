import React, { Component } from 'react'
import PropTypes from 'prop-types'
import padlock from '../../images/padlock.svg'
import unlock from '../../images/unlock.svg'

import './ImagePanel.scss'

class ImagePanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  fade() {
    if (this.state.hover) {
      return 0.8
    } else {
      return 1
    }
  }

  render() {
    const image = (
      <img
        style={{ opacity: this.fade() }}
        className="image"
        key={this.props.image.id}
        alt={`Photographed by ${this.props.image.photographer.name}`}
        src={this.props.image.url}
        id={this.props.image.id}
        onMouseEnter={() => this.setState({ hover: true })}
        />
        )
        
        const hoverImage = () => {
          if (this.state.hover) {
            return (
              <div 
              className="hover-container"
              onMouseLeave={() => this.setState({ hover: false })}
              onClick={() => this.props.toggleImageLock(this.props.image.id)}
              >
              <img
                id={`${this.props.image.id}-lock`} 
                className="lock"
                title="Prevent this image from reloading"
                key={`${this.props.image.id}-lock`}
                src={this.props.image.lockedIndex > -1 ? padlock : unlock}
                alt={this.props.image.lockedIndex > -1 ? 'A locked padlock icon' : 'An unlocked padlock icon'} 
                />
              <p className="photo-credit">
                {`Photographed by ${this.props.image.photographer.name}`}
              </p>
                {image}
            </div>
          ) 
        } else {
          return image
        }
    }

    return (
      <>
        {hoverImage()}
      </>
    ); 
  }
}

export default ImagePanel

ImagePanel.propTypes = {
  image: PropTypes.object.isRequired,
  toggleImageLock: PropTypes.func.isRequired
}