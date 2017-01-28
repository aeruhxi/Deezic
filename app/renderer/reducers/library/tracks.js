const initialTracks = [{
  id: '12345',
  title: 'I am a weaboo',
  artist: 'Papa Franku',
  album: 'Pink Guy',
  src: './test.mp3',
  genre: ['Pop'],
  length: 220
}];

const tracks = (state=initialTracks, action) => {
  switch (action.type) {
    case 'ADD_LIBRARY_TRACKS':
      return [
        ...state,
        action.tracks
      ];

    default:
      return state;
  }
};

export default tracks;
