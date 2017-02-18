import React, { Component, PropTypes } from 'react'

class Audio extends Component {
  constructor (props) {
    super(props)
    this.audioEl = null
  }

  componentDidMount () {
    this.audioEl.addEventListener('loadedmetadata', () => {
      this.props.onDurationSet(this.audioEl.duration)
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isPlaying !== this.props.isPlaying) {
      this.togglePlay(nextProps.isPlaying)
    }
    if (nextProps.playFromSeconds !== this.props.playFromSeconds) {
      this.seekToSeconds(nextProps.playFromSeconds)
    }
    if (nextProps.volume !== this.props.volume) {
      this.changeVolume(nextProps.volume)
    }
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.src !== this.props.src
  }

  render () {
    const {
      src
    } = this.props

    return (
      <audio
        src={src}
        ref={(audioEl) => { this.audioEl = audioEl }}
        onTimeUpdate={this.props.onTimeUpdate}
        onError={this.props.onError} />
    )
  }

  togglePlay (isPlaying) {
    if (isPlaying) {
      this.audioEl.play()
    } else {
      this.audioEl.pause()
    }
  }

  seekToSeconds (seconds) {
    this.audioEl.currentTime = seconds
  }

  changeVolume (vol) {
    this.audioEl.volume = vol
  }
}

Audio.propTypes = {
  src: PropTypes.string.isRequired,
  volume: PropTypes.number,
  onTimeUpdate: PropTypes.func,
  onError: PropTypes.func,
  isPlaying: PropTypes.bool.isRequired
}

export default Audio
