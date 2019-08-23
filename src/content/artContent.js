import React from "react";
import PictureContainer from "../components/PictureContainer/PictureContainer";
import { FILE_TYPE } from "../constants";

const paint_1_t = require("../assets/pictures/art/paint/paint_1_t.jpg");
const paint_2_t = require("../assets/pictures/art/paint/paint_2_t.jpg");
const paint_3_t = require("../assets/pictures/art/paint/paint_3_t.jpg");

const paint_1 = require("../assets/pictures/art/paint/paint_1.jpg");
const paint_2 = require("../assets/pictures/art/paint/paint_2.jpg");
const paint_3 = require("../assets/pictures/art/paint/paint_3.jpg");
const paint_4 = require("../assets/pictures/art/paint/paint_4.jpg");
const paint_5 = require("../assets/pictures/art/paint/paint_5.jpg");
const paint_6 = require("../assets/pictures/art/paint/paint_6.jpg");
const paint_7 = require("../assets/pictures/art/paint/paint_7.jpg");
const paint_8 = require("../assets/pictures/art/paint/paint_8.jpg");
const paint_9 = require("../assets/pictures/art/paint/paint_9.jpg");
const paint_10 = require("../assets/pictures/art/paint/paint_10.jpg");
const paint_11 = require("../assets/pictures/art/paint/paint_11.jpg");
const paint_12 = require("../assets/pictures/art/paint/paint_12.jpg");
const paint_13 = require("../assets/pictures/art/paint/paint_13.jpg");
const paint_14 = require("../assets/pictures/art/paint/paint_14.jpg");

const draw_1_t = require("../assets/pictures/art/draw/draw_1_t.jpg");
const draw_2_t = require("../assets/pictures/art/draw/draw_2_t.jpg");
const draw_3_t = require("../assets/pictures/art/draw/draw_3_t.jpg");

const draw_1 = require("../assets/pictures/art/draw/draw_1.jpg");
const draw_2 = require("../assets/pictures/art/draw/draw_2.jpg");
const draw_3 = require("../assets/pictures/art/draw/draw_3.jpg");
const draw_4 = require("../assets/pictures/art/draw/draw_4.jpg");

const ART = [
  {
    id: "art_paint",
    size: { x: 600, y: 300 },
    pos: { x: -100, y: 160 },
    title: "Paintings",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [paint_1_t, paint_2_t, paint_3_t],
    content: (
      <PictureContainer
        pictures={[
          paint_1,
          paint_2,
          paint_3,
          paint_4,
          paint_5,
          paint_6,
          paint_7,
          paint_8,
          paint_9,
          paint_10,
          paint_11,
          paint_12,
          paint_13,
          paint_14
        ]}
      />
    )
  },
  {
    id: "art_draw",
    size: { x: 600, y: 300 },
    pos: { x: -100, y: 160 },
    title: "Drawings",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [draw_1_t, draw_2_t, draw_3_t],
    content: (
      <PictureContainer
        pictures={[
          draw_1,
          draw_2,
          draw_3,
          draw_4
        ]}
      />
    )
  }
];

export default ART;