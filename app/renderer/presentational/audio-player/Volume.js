import React, { Component } from 'react';

class Volume extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.el
  }

  render() {
    return(
      <div>
        g<
        <i className="material-icons"
        ref={el => { this.volumeEl = el; }}>
        { this.getVolumeIcon(this.props.volume) }
        </i>
      </div>
    );
  }

  getVolumeIcon(volume) {
    if (volume <= 0) {
      return 'volume_mute';
    } else if (volume >= 0.5) {
      return 'volume_up';
    } else {
      return 'volume_down';
    }
  }

}

export default Volume;
