import React from "react";
import { FILE_TYPE } from "../constants";

const china1_t = require("../assets/pictures/movies/china1_t.jpg");
const china2_t = require("../assets/pictures/movies/china2_t.jpg");
const elevator_t = require("../assets/pictures/movies/elevator_t.jpg");

const MOVIES = [
  {
    id: "movies_china1",
    size: { x: 520, y: 340 },
    pos: { x: -300, y: 80 },
    title: "CHINA 2018 part 1.mp4",
    type: FILE_TYPE.VIDEO,
    source: china1_t,
    content: (
      <iframe
        className={FILE_TYPE.VIDEO}
        src="https://www.youtube.com/embed/KCSq4Pk3ftk"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  },
  {
    id: "movies_china2",
    size: { x: 520, y: 340 },
    pos: { x: -270, y: 110 },
    title: "CHINA 2018 part 2.mp4",
    type: FILE_TYPE.VIDEO,
    source: china2_t,
    content: (
      <iframe
        className={FILE_TYPE.VIDEO}
        src="https://www.youtube.com/embed/IzTYggOUDX8"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  },
  {
    id: "movies_elevator",
    size: { x: 520, y: 340 },
    pos: { x: -240, y: 140 },
    title: "Elevator Man Trailer.mp4",
    type: FILE_TYPE.VIDEO,
    source: elevator_t,
    content: (
      <iframe
        className={FILE_TYPE.VIDEO}
        src="https://www.youtube.com/embed/_xIH3a9L2Fs"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  },
];

export default MOVIES;
