import tracks from './../../../app/renderer/reducers/library/tracks'
import artists from './../../../app/renderer/reducers/library/artists'
import albums from './../../../app/renderer/reducers/library/albums'
import dirs from './../../../app/renderer/reducers/library/dirs'

const firstAction = {
  type: 'ADD_LIBRARY_TRACKS',
  tracks: [{
    id: '1234',
    title: 'This is title',
    artist: 'Artist1',
    album: 'Album1',
    length: 300,
    src: '/home/music/this_is_title.mp3'
  }]
}
const secondAction = {
  type: 'ADD_LIBRARY_TRACKS',
  tracks: [{
    id: '1235',
    title: 'Title2',
    artist: 'Artist2',
    album: 'Album1',
    length: 399,
    src: '/home/music/title2.mp3'
  }, {
    id: '1236',
    title: 'Title3',
    artist: 'Artist2',
    album: 'Album2',
    length: 180,
    src: '/home/music/title3.mp3'
  }]
}

describe('tracks reducer', () => {
  const firstExpState = {
    byId: {
      '1234': {
        id: '1234',
        title: 'This is title',
        artist: 'Artist1',
        album: 'Album1',
        length: 300,
        src: '/home/music/this_is_title.mp3'
      }
    },
    allIds: ['1234']
  }

  const secondExpState = {
    byId: {
      '1234': {
        id: '1234',
        title: 'This is title',
        artist: 'Artist1',
        album: 'Album1',
        length: 300,
        src: '/home/music/this_is_title.mp3'
      },
      '1235': {
        id: '1235',
        title: 'Title2',
        artist: 'Artist2',
        album: 'Album1',
        length: 399,
        src: '/home/music/title2.mp3'
      },
      '1236': {
        id: '1236',
        title: 'Title3',
        artist: 'Artist2',
        album: 'Album2',
        length: 180,
        src: '/home/music/title3.mp3'
      }
    },
    allIds: ['1234', '1235', '1236']
  }

  it('should handle ADD_LIBRARY_TRACKS', () => {
    expect(tracks({}, firstAction)).toEqual(firstExpState)
    expect(tracks(firstExpState, secondAction)).toEqual(secondExpState)
  })
})

describe('albums reducer', () => {
  const firstExpState = [{artist: 'Artist1', album: 'Album1'}]
  const secondExpState = [
    {artist: 'Artist1', album: 'Album1'},
    {artist: 'Artist2', album: 'Album1'},
    {artist: 'Artist2', album: 'Album2'}
  ]

  it('should handle ADD_LIBRARY_TRACKS', () => {
    expect(albums([], firstAction)).toEqual(firstExpState)
    expect(albums(firstExpState, secondAction)).toEqual(secondExpState)
  })
})

describe('artists reducer', () => {
  const firstExpState = ['Artist1']
  const secondExpState = ['Artist1', 'Artist2']

  it('should handle ADD_LIBRARY_TRACKS', () => {
    expect(artists([], firstAction)).toEqual(firstExpState)
    expect(artists(firstExpState, secondAction)).toEqual(secondExpState)
  })
})

describe('dirs reducer', () => {
  const firstAction = {
    type: 'ADD_LIBRARY_DIR',
    dir: '/home/music/hello'
  }
  const secondAction = {
    type: 'ADD_LIBRARY_DIR',
    dir: '/home/music/bye'
  }
  const firstExpState = ['/home/music/hello']
  const secondExpState = ['/home/music/hello', '/home/music/bye']

  it('should handle ADD_LIBRARY_TRACKS', () => {
    expect(dirs([], firstAction)).toEqual(firstExpState)
    expect(dirs(firstExpState, secondAction)).toEqual(secondExpState)
  })
})
