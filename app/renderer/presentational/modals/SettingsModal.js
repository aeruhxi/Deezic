import React, { Component } from 'react';
import Modal from 'react-modal';

class SettingsModal extends Component {

  render() {
    return (
      <Modal
        isOpen={this.props.currentModal === 'settings'}
        overlayClassName="settings-modal-overlay"
        className="settings-modal"
        portalClassName="settings-modal-portal"
        contentLabel="Settings"
        parentSelector={() => document.body}
        onRequestClose={this.props.handleRequestClose}
      >
        <h3>Settings</h3>
        <button onClick={this.props.handleAddLibClick}>Add folder</button>
      </Modal>
    );
  }
}

export default SettingsModal;
