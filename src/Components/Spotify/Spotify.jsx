import React from "react";
import "./Spotify.scss";

const albumCover = require("../../assets/pictures/photos/2019a/1.jpg");

const spotify = props => {
  return (
    <div className="spotify">
      <div className="spotify__playlist">
        <div className="spotify__playlist__song"></div>
      </div>
      <img
        className="spotify__albumCover"
        alt="album cover"
        src={albumCover}
      ></img>
      <div className="spotify__toolBar">
        <div className="spotify__toolBar__info">
          <p className="spotify__toolBar__title">Puff Daddy</p>
          <p className="spotify__toolBar__artist">JPEGMAFIA</p>
        </div>
        <div className="spotify__toolBar__control">
          <div className="spotify__toolBar__button -prev"></div>
          <div className="spotify__toolBar__button -play"></div>
          <div className="spotify__toolBar__button -next"></div>
          <div className="spotify__toolBar__bar -empty"></div>
        </div>
        <div className="spotify__toolBar__volume"></div>
      </div>
    </div>
  );
};

export default spotify;
