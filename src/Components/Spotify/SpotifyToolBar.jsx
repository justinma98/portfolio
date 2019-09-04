import React, { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import "./Spotify.scss";

const spotifyToolBar = props => {
  const [songTime, setSongTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playInterval, setPlayInterval] = useState(undefined);
  const [volume, setVolume] = useState(0.25);
  const [mute, setMute] = useState(-1);
  let { title, artist, src } = props;
  let source = src;
  let songDuration = source.duration;

  const muteVol = () => {
    setMute(volume);
    setVolume(0);
    source.volume = 0;
  };

  const unmuteVol = () => {
    setVolume(mute);
    source.volume = mute;
    setMute(-1);
  };

  const toggleMute = () => {
    mute < 0 ? muteVol() : unmuteVol();
  };

  const updateVolume = volumePercent => {
    if (mute >= 0) unmuteVol();
    let vol = 0.01 * volumePercent;
    source.volume = vol;
    setVolume(vol);
  };

  const updateSongTime = songPercent => {
    pauseSong();
    setSongTime(0.01 * songPercent * songDuration);
  };

  const playSong = () => {
    source.volume = volume;
    source.currentTime = songTime;
    source.play();
    setPlayInterval(setInterval(() => setSongTime(source.currentTime), 1000));
    setIsPlaying(true);
  };

  const pauseSong = () => {
    source.pause();
    clearInterval(playInterval);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    isPlaying ? pauseSong() : playSong();
  };

  return (
    <div className="spotifyToolBar">
      <div className="spotifyToolBar__info">
        <p className="spotifyToolBar__title">{title}</p>
        <p className="spotifyToolBar__artist">{artist}</p>
      </div>
      <div className="spotifyToolBar__control">
        <div className="spotifyToolBar__button -prev" />
        <div
          className={
            "spotifyToolBar__button" + (isPlaying ? " -pause" : " -play")
          }
          onClick={togglePlay}
        />
        <div className="spotifyToolBar__button -next" />
        <div className="spotifyToolBar__songBar">
          <Slider
            percent={(100 * songTime) / songDuration}
            onChange={updateSongTime}
          />
        </div>
      </div>
      <div className="spotifyToolBar__volume">
        <div
          className={"spotifyToolBar__volumeIcon" + (mute < 0 ? "" : " -mute")}
          onClick={toggleMute}
        />
        <div className="spotifyToolBar__volumeBar">
          <Slider percent={volume * 100} onChange={updateVolume} />
        </div>
      </div>
    </div>
  );
};

export default spotifyToolBar;
