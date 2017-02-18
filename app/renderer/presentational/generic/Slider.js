import React, { Component } from 'react'

class Slider extends Component {
  constructor (props) {
    super(props)
    this.slider = null
  }

  componentDidUpdate () {
    const materialSlider = this.slider.MaterialSlider
    if (materialSlider) {
      materialSlider.change(this.props.value)
    }
  }

  componentDidMount () {
    // Buy time for mdl library to insert its dom to slider
    setTimeout(() => {
      // Injecting classname to slider container
      // because there is no way to select parent through css
      this.slider.parentNode.classList.add(this.props.containerClassName)
    }, 400)
  }

  render () {
    return (
      <input
        ref={(el) => { this.slider = el }}
        className='mdl-slider mdl-js-slider'
        type='range'
        min='0' max={this.props.max}
        value={this.props.value}
        tabIndex='0'
        onChange={this.props.onSlide}
        onMouseLeave={this.props.onMouseLeave}
      />
    )
  }

}

export default Slider
