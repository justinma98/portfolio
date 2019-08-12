import React from "react";
import { FILE_TYPE } from "../constants";

const DEV = [
  {
    id: "test1",
    size: { x: 400, y: 200 },
    pos: { x: 200, y: 100 },
    title: "Northern Lights.jpg",
    type: FILE_TYPE.PICTURE,
    source: "https://www.w3schools.com/w3css/img_lights.jpg",
    content: (
      <img
        className={FILE_TYPE.PICTURE}
        alt="northern lights"
        src="https://www.w3schools.com/w3css/img_lights.jpg"
      />
    )
  },
  {
    id: "test2",
    size: { x: 200, y: 250 },
    pos: { x: 250, y: 150 },
    title: "Northern yea.jpg",
    type: FILE_TYPE.PICTURE,
    source: "https://www.w3schools.com/w3css/img_lights.jpg",
    content: (
      <iframe
        className={FILE_TYPE.PICTURE}
        src="https://justinma98.github.io/secret/"
      />
    )
  },
  {
    id: "test3",
    size: { x: 450, y: 300 },
    pos: { x: 300, y: 200 },
    title: "Northern okay.jpg",
    type: FILE_TYPE.PICTURE
  },
  {
    id: "test4",
    size: { x: 300, y: 200 },
    pos: { x: 150, y: 250 },
    title: "woah Lights.jpg",
    type: FILE_TYPE.PICTURE
  }
];

export default DEV;