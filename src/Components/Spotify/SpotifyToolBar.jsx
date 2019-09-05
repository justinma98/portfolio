import React, { useState, useEffect, useRef } from "react";
import Slider from "../Slider/Slider";
import "./Spotify.scss";

const spotifyToolBar = props => {
  const [songTime, setSongTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playInterval, setPlayInterval] = useState(undefined);
  const [volume, setVolume] = useState(0.25);
  const [mute, setMute] = useState(-1);
  const mounted = useRef();
  const pastSrc = useRef();

  let { title, artist, src, onChange, index, lastIndex } = props;

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      pastSrc.current.pause();
      pastSrc.current.currentTime = 0;
      source.currentTime = 0;
      source.volume = volume;
      source.play();
      setSongTime(0);
      setIsPlaying(true);
    }
    pastSrc.current = src;
  }, [src]);

  useEffect(() => {
    if (isPlaying && !playInterval) {
      setPlayInterval(setInterval(updateSongTime, 1000));
    } else if (!isPlaying && playInterval) {
      clearInterval(playInterval);
      setPlayInterval(undefined);
    }
  }, [isPlaying, songTime]);

  let source = src;
  let songDuration = src.duration;

  const updateSongTime = () => {
    setSongTime(prevTime => {
      if (prevTime > songDuration) {
        if (index === lastIndex) setIsPlaying(false);
        handleNext();
        return 0;
      }
      return prevTime + 1;
    });
  };

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

  const updateSongPercent = songPercent => {
    pauseSong();
    setSongTime(0.01 * songPercent * songDuration);
  };

  const playSong = () => {
    if (songTime >= songDuration) {
      if (index === lastIndex) {
        setSongTime(0);
      };
      handleNext();
    }
    source.volume = volume;
    source.currentTime = songTime;
    source.play();
    setIsPlaying(true);
  };

  const pauseSong = () => {
    source.pause();
    setSongTime(source.currentTime);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    isPlaying ? pauseSong() : playSong();
  };

  const handleNext = () => {
    onChange(index + 1);
  };

  const handlePrev = () => {
    if (songTime < 3) {
      onChange(index - 1);
    } else {
      source.currentTime = 0;
      setSongTime(0);
    }
  };

  return (
    <div className="spotifyToolBar">
      <div className="spotifyToolBar__info">
        <p className="spotifyToolBar__title">{title}</p>
        <p className="spotifyToolBar__artist">{artist}</p>
      </div>
      <div className="spotifyToolBar__control">
        <div className="spotifyToolBar__button -prev" onClick={handlePrev} />
        <div
          className={
            "spotifyToolBar__button" + (isPlaying ? " -pause" : " -play")
          }
          onClick={togglePlay}
        />
        <div className="spotifyToolBar__button -next" onClick={handleNext} />
        <div className="spotifyToolBar__songBar">
          <Slider
            percent={(100 * songTime) / songDuration}
            onChange={updateSongPercent}
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
