import { connect } from 'react-redux'
import Tracks from './../../presentational/pages/library/Tracks'
import { humanizeSeconds } from './../../utils/time'
import { playAndAddSongsToQueue } from './../../actions/thunks/player'
import { getAllTracks } from '../../selectors/library'

const mapStateToProps = (state) => {
  const tracks = getAllTracks(state)
  const allTrackIds = state.library.tracks.allIds

  return {
    tracks: getUITracks(tracks),
    currentSongId: state.player.currentSong.id,
    isPlaying: state.player.isPlaying,
    allTrackIds
  }
}

const mergeProps = (
  { tracks, currentSongId, isPlaying, allTrackIds }, { dispatch }
) => ({
  tracks,
  currentSongId,
  isPlaying,
  handlePlayPause: id => dispatch(playAndAddSongsToQueue(id, allTrackIds))
})

const TracksContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(Tracks)

export default TracksContainer

const getUITracks = (tracks) => {
  return tracks.map(track => ({
    id: track.id,
    song: track.title,
    artist: track.artist,
    album: track.album,
    time: humanizeSeconds(track.length)
  }))
}
