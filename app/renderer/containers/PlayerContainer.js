import { connect } from 'react-redux';
import Player from '../presentational/audio-player/Player';
import { togglePlay, changeCurrentSeconds, seekToSeconds, setDuration, changeVolume } from './../actions/player';

export const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  onPlayClick: () => dispatch(togglePlay),
  onTimeUpdate: (e) => dispatch(changeCurrentSeconds(e.target.currentTime)),
  onSeekerChange: (e) => dispatch(seekToSeconds(e.target.value)),
  onDurationSet: (dur) => dispatch(setDuration(dur)),
  onVolumeChange: (e) => dispatch(changeVolume(e.target.value / 100))
});

const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);

export default PlayerContainer;
