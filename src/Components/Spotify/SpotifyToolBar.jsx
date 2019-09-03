import React from "react";
import "./Spotify.scss";

const spotifyToolBar = props => {
  let { title, artist } = props;
  return (
    <div className="spotifyToolBar">
      <div className="spotifyToolBar__info">
        <p className="spotifyToolBar__title">{title}</p>
        <p className="spotifyToolBar__artist">{artist}</p>
      </div>
      <div className="spotifyToolBar__control">
        <div className="spotifyToolBar__button -prev"></div>
        <div className="spotifyToolBar__button -play"></div>
        <div className="spotifyToolBar__button -next"></div>
        <div className="spotifyToolBar__bar -empty"></div>
      </div>
      <div className="spotifyToolBar__volume"></div>
    </div>
  );
};

export default spotifyToolBar;
