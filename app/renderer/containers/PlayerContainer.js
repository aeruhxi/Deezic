import { connect } from 'react-redux';
import Player from '../presentational/audio-player/Player';
import { togglePlay, changeCurrentSeconds, seekToSeconds, setDuration } from './../actions/player';

export const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  onPlayClick: () => dispatch(togglePlay),
  onTimeUpdate: (e) => dispatch(changeCurrentSeconds(e.target.currentTime)),
  onSlide: (e) => dispatch(seekToSeconds(e.target.value)),
  onDurationSet: (dur) => dispatch(setDuration(dur))
});

const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);

export default PlayerContainer;
