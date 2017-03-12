export function getAllTracks ({ library }) {
  const { allIds, byId } = library.tracks
  return allIds.map(id => byId[id])
}
