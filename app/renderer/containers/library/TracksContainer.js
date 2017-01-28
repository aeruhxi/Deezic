import { connect } from 'react-redux';
import Tracks from './../../presentational/pages/library/Tracks';
import { humanizeSeconds } from './../../utils/time';

const mapStateToProps = ({ library }) => {
  const tracks = library.tracks;
  return {
    tracks: getTracks(tracks)
  };
};

const getTracks = (tracks) => {
  return tracks.map(track => ({
    id: track.id,
    song: track.title,
    artist: track.artist,
    album: track.album,
    time: humanizeSeconds(track.length)
  }));
};

const TracksContainer = connect(
  mapStateToProps
)(Tracks);

export default TracksContainer;
