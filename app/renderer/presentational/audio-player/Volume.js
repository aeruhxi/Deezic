import React, { Component } from 'react'
import Slider from './../generic/Slider'
import { findDOMNode } from 'react-dom'

class Volume extends Component {
  constructor (props) {
    super(props)
    this.sliderEl = null
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  render () {
    return (
      <div
        className='volume-block'>
        <Slider
          ref={el => { this.sliderEl = el }}
          containerClassName='player__volume-slider'
          max={100}
          value={this.props.volume * 100}
          onSlide={this.props.onVolumeChange}
          onMouseLeave={this.handleMouseLeave} />
        <i
          onMouseEnter={this.handleMouseEnter}
          className='material-icons' >
          { this.getVolumeIcon(this.props.volume) }
        </i>
      </div>
    )
  }

  handleMouseEnter () {
    const parent = findDOMNode(this.sliderEl).parentNode
    parent.style.display = 'flex'
  }

  handleMouseLeave () {
    const parent = findDOMNode(this.sliderEl).parentNode
    parent.style.display = 'none'
  }

  getVolumeIcon (volume) {
    if (volume <= 0) {
      return 'volume_mute'
    } else if (volume >= 0.5) {
      return 'volume_up'
    } else {
      return 'volume_down'
    }
  }
}

export default Volume
