import { connect } from 'react-redux'
import SettingsModal from './../../presentational/modals/SettingsModal'
import { setModal } from './../../actions/modal'
import { addLibraryDirs, addLibraryTracks } from './../../actions/library'
import { readDirRecursively } from './../../utils/files'
import { settle } from './../../utils/promise'
import fs from 'fs'
import mm from 'musicmetadata'
const { dialog } = require('electron').remote
import shortid from 'shortid'

const mapStateToProps = ({ currentModal }) => ({
  currentModal
})

const mapDispatchToProps = (dispatch) => ({
  handleRequestClose: () => dispatch(setModal(null)),
  handleAddLibClick: () => handleAddLibClick(dispatch)
})

const SettingsModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsModal)

export default SettingsModalContainer

function handleAddLibClick (dispatch) {
  const dirs = dialog.showOpenDialog({properties: ['openFile', 'openDirectory']})
  if (dirs === undefined) return  // If dialog is cancelled

  addLibraryDirs(dirs)

  readDirRecursively(dirs[0])
    .then(files => settle(files.map(readMetadata)))
    .then(settled =>
      settled
        .filter(x => x.state === 'resolved')
        .map(x => x.value))
    .then(results =>
      results.forEach(metadata =>
        dispatch(addLibraryTracks({
          id: shortid.generate(),
          title: metadata.title || 'Unknown Title',
          artist: metadata.artist[0] || 'Unknown Artist',
          album: metadata.album || 'Unknown Album',
          src: metadata.src,
          genre: metadata.genre || 'Unknown genre',
          length: metadata.duration || 0
        }))))
    .catch(console.error)   // eslint-disable-line no-console
}

// Resolves a promise with metadata for a given file
const readMetadata = (file) => {
  return new Promise((resolve, reject) => {
    const readableStream = fs.createReadStream(file)
    mm(readableStream, {duration: true}, (err, metadata) => {
      if (err) reject(err)
      readableStream.close()
      resolve({
        ...metadata,
        src: file
      })
    })
  })
}
