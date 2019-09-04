import React from "react";
import SpotifyToolBar from "./SpotifyToolBar";
import SpotifyListItem from "./SpotifyListItem";
import "./Spotify.scss";

const albumCover = require("../../assets/pictures/photos/2019a/1.jpg");

const spotify = props => {
  return (
    <div className="spotify">
      <img className="spotify__albumCover" alt="album cover" src={albumCover} />
      <div className="spotify__playlist">
        <SpotifyListItem artist="JPEFMAFIA" title="Puff Daddy" />
        <SpotifyListItem artist="JPEFMAFIA" title="Puff Daddy" />
        <SpotifyListItem
          artist="JPEFdwadwdawdMAFIA"
          title="Pufawdawdawdf Daddy"
        />
        <SpotifyListItem artist="JPEFMAFIA" title="Puff Daddy" />
        <SpotifyListItem artist="JPEFawdawdawdawdMAFIA" title="Puff Daddy" />
        <SpotifyListItem artist="JPEFMAFIA" title="Puff Daddy" />
        <SpotifyListItem artist="JPEFMAFIA" title="Puff Daawdawdawdawddy" />
        <SpotifyListItem artist="JPEFMAFIA" title="Puff Daddy" />
        <SpotifyListItem artist="JPEFMAFIA" title="Puff Daddy" />
        <SpotifyListItem artist="JPEFMAFIA" title="Puff Daddy" />
      </div>
      <SpotifyToolBar
        artist="JPEGMAFIA"
        title="Puff Daddy"
      />
    </div>
  );
};

export default spotify;
