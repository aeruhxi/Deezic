import React from 'react';
import defaultAlbumImage from '../../../assets/images/album-art-default.png';
import Audio from './Audio';

const Player = ({
  playFromSeconds,
  onPrevClick,
  onPlayClick,
  onNextClick,
  isPlaying,
  volume,
  currentSong,
  onTimeUpdate
}) => {
  return (
    <section className="player">
      <Audio
        src={currentSong.src}
        isPlaying={isPlaying}
        volume={volume}
        playFromSeconds={playFromSeconds}
        onTimeUpdate={onTimeUpdate}
        />
      <div className="player__info-block">
        <img className="player__album-art" src={ currentSong.albumArt || defaultAlbumImage } />
        <div className="player__info">
          <p>{ currentSong.title} </p>
          <p>{ currentSong.artist }</p>
        </div>
      </div>
      <div className="player__control-primary">
        <i onClick={ onPrevClick } className="material-icons">skip_previous</i>
        <i onClick={ onPlayClick } className="material-icons">
          { isPlaying ? 'pause_circle_filled' : 'play_circle_filled' }
        </i>
        <i onClick={ onNextClick } className="material-icons">skip_next</i>
      </div>
      <div className="player__control-secondary">
      </div>
    </section>
  );
};

export default Player;
