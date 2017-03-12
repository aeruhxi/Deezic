export function getAllTracksFromQueue ({ library, queue }) {
  return queue.map(id => library.tracks.byId[id])
}
