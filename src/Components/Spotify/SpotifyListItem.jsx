import React from "react";
import "./Spotify.scss";

const spotifyListItem = props => {
  let { title, artist } = props;
  return (
    <div className="spotifyListItem">
      <span className="spotifyListItem__title">{title}</span>
      <span className="spotifyListItem__artist">{artist}</span>
    </div>
  );
};

export default spotifyListItem;
