import React from "react";
import "./Spotify.scss";

const spotifyListItem = props => {
  let { title, artist, isPlaying, index, onClick } = props;
  return (
    <div
      className={"spotifyListItem" + (isPlaying ? " -isPlaying" : "")}
      onClick={() => onClick(index)}
    >
      <span className="spotifyListItem__title">{title}</span>
      <span className="spotifyListItem__artist">{artist}</span>
    </div>
  );
};

export default spotifyListItem;
