import React, { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import "./Spotify.scss";
import test_mp3 from "../../assets/songs/test.mp3";
import { unwatchFile } from "fs";

const testSong = new Audio(test_mp3);

const spotifyToolBar = props => {
  const [songTime, setSongTime] = useState(20);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playInterval, setPlayInterval] = useState(undefined);
  let { title, artist } = props;
  let source = testSong;
  let songDuration = source.duration;

  useEffect(() => {
    console.log("song time", songTime);
  }, [songTime])


  const updateSliderSongTime = songPercent => {
    pauseSong();
    console.log("slider", songPercent, 0.01 * songPercent * songDuration)
    setSongTime(0.01 * songPercent * songDuration);
  };

  const updatePlaySongTime = () => {
    console.log("update play")
    setSongTime(source.currentTime)
  }

  const playSong = () => {
    source.currentTime = songTime;
    source.play();
    setPlayInterval( setInterval(updatePlaySongTime, 1000));
    setIsPlaying(true);
  };

  const pauseSong = () => {
    source.pause();
    console.log("pause", playInterval)
    clearInterval(playInterval);
    setIsPlaying(false);
  }

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
            onChange={updateSliderSongTime}
          />
        </div>
      </div>
      <div className="spotifyToolBar__volume">
        <div className="spotifyToolBar__icon" />
        <div className="spotifyToolBar__volumeBar" />
      </div>
    </div>
  );
};

export default spotifyToolBar;
