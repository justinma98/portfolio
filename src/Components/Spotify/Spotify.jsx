import React, { useState } from "react";
import SpotifyToolBar from "./SpotifyToolBar";
import SpotifyListItem from "./SpotifyListItem";
import "./Spotify.scss";

const spotify = props => {
  const [songNum, setSongNum] = useState(0);

  let { playlist } = props;

  const handleSongChange = index => {
    console.log("change to ", index)
    if (index === songNum || index < 0 || index >= playlist.length) return;
    setSongNum(index);
  };

  return (
    <div className="spotify">
      <img
        className="spotify__albumCover"
        alt="album cover"
        src={playlist[songNum].album}
      />
      <div className="spotify__playlist">
        {playlist.map((song, index) => (
          <SpotifyListItem
            key={index}
            index={index}
            isPlaying={index === songNum}
            artist={song.artist}
            title={song.title}
            onClick={handleSongChange}
          />
        ))}
      </div>
      <SpotifyToolBar
        artist={playlist[songNum].artist}
        title={playlist[songNum].title}
        src={playlist[songNum].src}
      />
    </div>
  );
};

export default spotify;
