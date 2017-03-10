import { connect } from 'react-redux'
import Tracks from './../../presentational/pages/library/Tracks'
import { humanizeSeconds } from './../../utils/time'
import { togglePlayById } from './../../actions/player'
import { allTracks } from '../../reducers/library/tracks'

const mapStateToProps = (state) => {
  const rawTracks = state.library.tracks
  const tracks = allTracks(rawTracks)
  return {
    rawTracks,
    tracks: getUITracks(tracks),
    currentSongId: state.player.currentSong.id,
    isPlaying: state.player.isPlaying
  }
}

const mapDispatchToProps = (dispatch) => ({
  handlePlayPause: id => dispatch(togglePlayById(id))
})

const TracksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracks)

export default TracksContainer

const getUITracks = (tracks) => {
  return tracks.map(track => ({
    id: track.id,
    song: track.title,
    artist: track.artist,
    album: track.album.album,
    time: humanizeSeconds(track.length)
  }))
}
