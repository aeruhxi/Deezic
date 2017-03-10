import { connect } from 'react-redux'
import Tracks from './../../presentational/pages/library/Tracks'
import { humanizeSeconds } from './../../utils/time'
import { togglePlay, setCurrentSong } from './../../actions/player'
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

const mergeProps = ({tracks, currentSongId, isPlaying, rawTracks}, { dispatch }) => ({
  tracks,
  currentSongId,
  isPlaying,
  handlePlayPause: (id) => {
    if (currentSongId === id) {
      dispatch(togglePlay())
    } else {
      dispatch(setCurrentSong(getSongById(id, rawTracks.byId)))
      setTimeout(() => dispatch(togglePlay()), 400)
    }
  }
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
    album: track.album.album,
    time: humanizeSeconds(track.length)
  }))
}

const getSongById = (id, tracksById) => {
  const track = tracksById[id]
  return {
    id: track.id,
    title: track.title,
    artist: track.artist,
    album: track.album.album,
    albumArt: track.albumArt,
    src: track.src
  }
}
