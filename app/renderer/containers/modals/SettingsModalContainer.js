import { connect } from 'react-redux'
import SettingsModal from './../../presentational/modals/SettingsModal'
import { setModal } from './../../actions/modal'
import { readDirsAndAddToLibrary } from './../../actions/thunks/library'

const mapStateToProps = ({ currentModal, library }) => ({
  currentModal,
  dirs: library.dirs
})

const mapDispatchToProps = (dispatch) => ({
  handleRequestClose: () => dispatch(setModal(null)),
  handleAddLibClick: () => dispatch(readDirsAndAddToLibrary())
})

const SettingsModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsModal)

export default SettingsModalContainer
