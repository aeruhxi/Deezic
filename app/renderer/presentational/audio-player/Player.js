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
            <p>{ currentSong.title || 'Unknown Title'} </p>
            <p>{ currentSong.artist || 'Unknown Artist'}</p>
          </div>
        </div>
        <div className="player__control-primary">
          <p className="player__timer">
            {humanizeSeconds(currentSeconds)} / {humanizeSeconds(totalSeconds)}
          </p>
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

const humanizeSeconds = (second) => {
  let time = Math.trunc(second);
  let sec = time % 60;
  time = Math.trunc(time / 60);
  let min = time % 60;
  time = Math.trunc(time / 60);
  let hour = time % 24;

  let humanizedTime = '';
  if (hour) humanizedTime += (oneDigitNumber(hour) ? `0${hour}` : hour) + ':';
  humanizedTime += (oneDigitNumber(min) ? `0${min}` : min) + ':';
  humanizedTime += (oneDigitNumber(sec) ? `0${sec}` : sec);

  return humanizedTime;
};

const oneDigitNumber = (num) => {
  return num >= 0 && num <=9;
};

export default Player;
