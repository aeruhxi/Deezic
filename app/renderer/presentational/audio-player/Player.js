import React from 'react';
import defaultAlbumImage from '../../../assets/images/album-art-default.png';
import Audio from './Audio';
import Slider from './../generic/Slider';
import Volume from './Volume';

const Player = ({
  playFromSeconds,
  onPrevClick,
  onPlayClick,
  onNextClick,
  isPlaying,
  volume,
  currentSong,
  onTimeUpdate,
  currentSeconds,
  totalSeconds,
  onSeekerChange,
  onDurationSet,
  onVolumeChange
}) => {
  return (
    <section className="player">
        <Slider
          containerClassName="player__seeker"
          value={currentSeconds}
          max={totalSeconds}
          onSlide={onSeekerChange} />
        <Audio
          src={currentSong.src}
          isPlaying={isPlaying}
          volume={volume}
          playFromSeconds={playFromSeconds}
          onTimeUpdate={onTimeUpdate}
          onDurationSet={onDurationSet}
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
          <Volume
            onVolumeChange={onVolumeChange}
            volume={volume}/>
          <i className="material-icons">playlist_play</i>
        </div>
    </section>
  );
};

export default Player;
