import React, { Component } from 'react'
import './../../../../assets/styles/pages/library/tracks.css'

class Tracks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hoveredTrackID: null
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.listItemStyle = {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  render () {
    return (
      <ul className='track-list'>
        {this.props.tracks.map((track, index) => (
          <li
            style={this.props.currentSongId === track.id ? this.listItemStyle : null}
            onMouseEnter={() => this.handleMouseEnter(track.id)}
            onMouseLeave={this.handleMouseLeave}
            key={track.id} className='track-item'
          >
            <p className='track-item__number'>
              {this.renderNumber(track, index)}
            </p>
            <div className='track-item__details'>
              <h6>{track.song}</h6>
              <p>{track.artist} <span className='bullet'>&#8226;</span> {track.album}</p>
            </div>
            <div className='track-item__right'>
              <i className='material-icons track-item__favorite-icon'>favorite_border</i>
              <span className='track-item__duration'>{track.time}</span>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  handleMouseEnter (id) {
    this.setState({ hoveredTrackID: id })
  }
  handleMouseLeave () {
    this.setState({ hoveredTrackID: null })
  }

  renderNumber (track, index) {
    const icon = fontName => (
      <i
        onClick={() => this.props.handlePlayPause(track.id)}
        className='material-icons'>
        {fontName}
      </i>
    )

    if (this.props.currentSongId === track.id) {
      return icon(this.props.isPlaying ? 'pause' : 'play_arrow')
    } else if (this.state.hoveredTrackID === track.id) {
      return icon('play_arrow')
    } else {
      return index + 1
    }
  }
}

export default Tracks
