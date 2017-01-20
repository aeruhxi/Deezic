import { connect } from 'react-redux';
import Player from '../presentational/audio-player/Player';

// TODO: Separate actions into different files
const togglePlay = {
  type: 'TOGGLE_PLAY'
};

const changeCurrentSeconds = (seconds) => ({
  type: 'CHANGE_CURRENT_SECONDS',
  currentSeconds: seconds
});

const mapStateToProps = ({ playFromSeconds, isPlaying, currentSeconds, volume, currentSong}) => ({
  playFromSeconds,
  isPlaying,
  currentSeconds,
  volume,
  currentSong
});

const mapDispatchToProps = (dispatch) => ({
  onPlayClick: () => dispatch(togglePlay),
  onTimeUpdate: (e) => dispatch(changeCurrentSeconds(e.target.currentTime))
});

const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);

export default PlayerContainer;
