import { connect } from 'react-redux'
import Player from '../presentational/audio-player/Player'
import {
  changeCurrentSeconds, seekToSeconds, setDuration,
  changeVolume, pause, play
} from './../actions/player'
import {
  togglePlay,
  playNextOnQueue, playPrevOnQueue
} from './../actions/thunks/player'

const mapStateToProps = ({ player }) => ({
  ...player
})

const mapDispatchToProps = (dispatch) => ({
  onPlayClick: () => dispatch(togglePlay()),
  onPrevClick: () => dispatch(playPrevOnQueue()),
  onNextClick: () => dispatch(playNextOnQueue()),
  onTimeUpdate: (e) => dispatch(changeCurrentSeconds(e.target.currentTime)),
  onSeekerChange: (e) => dispatch(seekToSeconds(e.target.value)),
  onDurationSet: (dur) => dispatch(setDuration(dur)),
  onVolumeChange: (e) => dispatch(changeVolume(e.target.value / 100)),
  onError: (e) => dispatch(dispatch(pause())),
  onCanPlayThrough: (e) => dispatch(play()),
  onEnded: (e) => dispatch(playNextOnQueue())
})

const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default PlayerContainer
