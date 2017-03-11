import { readDirRecursively } from '../../utils/files'
import { settle } from '../../utils/promise'
import fs from 'fs'
import mm from 'musicmetadata'
import shortid from 'shortid'
import { addLibraryTracks, addLibraryDirs } from './../library'
const { dialog } = require('electron').remote

// Read directory and dispatch music data
// Does side effect
export const readDirsAndAddToLibrary = () => {
  return (dispatch) => {
    dialog.showOpenDialog({
      properties: ['openFile', 'openDirectory']
    }, (dirs) => {
      if (dirs === undefined) return  // If dialog is cancelled

      dispatch(addLibraryDirs(dirs))

      readDirRecursively(dirs[0], ['.mp3'])
        .then(files => settle(files.map(readMetadata)))
        .then(settled =>
          settled
            .filter(x => x.state === 'resolved')
            .map(x => x.value))
        .then(results =>
          results.map(metadata => ({
            id: shortid.generate(),
            title: metadata.title || 'Unknown Title',
            artist: metadata.artist[0] || 'Unknown Artist',
            album: metadata.album || 'Unknown Album',
            length: metadata.duration,
            src: metadata.src
          })))
        .then(tracks => dispatch(addLibraryTracks(tracks)))
    })
  }
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
