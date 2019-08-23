import React from "react";
import PictureContainer from "../components/PictureContainer/PictureContainer";
import { FILE_TYPE } from "../constants";

const p17_1_t = require("../assets/pictures/photos/2017/1_t.jpg");
const p17_2_t = require("../assets/pictures/photos/2017/2_t.jpg");
const p17_3_t = require("../assets/pictures/photos/2017/3_t.jpg");

const p17_1 = require("../assets/pictures/photos/2017/1.jpg");
const p17_2 = require("../assets/pictures/photos/2017/2.jpg");
const p17_3 = require("../assets/pictures/photos/2017/3.jpg");
const p17_4 = require("../assets/pictures/photos/2017/4.jpg");
const p17_5 = require("../assets/pictures/photos/2017/5.jpg");
const p17_6 = require("../assets/pictures/photos/2017/6.jpg");
const p17_7 = require("../assets/pictures/photos/2017/7.jpg");
const p17_8 = require("../assets/pictures/photos/2017/8.jpg");
const p17_9 = require("../assets/pictures/photos/2017/9.jpg");
const p17_10 = require("../assets/pictures/photos/2017/10.jpg");
const p17_11 = require("../assets/pictures/photos/2017/11.jpg");
const p17_12 = require("../assets/pictures/photos/2017/12.jpg");
const p17_13 = require("../assets/pictures/photos/2017/13.jpg");
const p17_14 = require("../assets/pictures/photos/2017/14.jpg");
const p17_15 = require("../assets/pictures/photos/2017/15.jpg");
const p17_16 = require("../assets/pictures/photos/2017/16.jpg");
const p17_17 = require("../assets/pictures/photos/2017/17.jpg");
const p17_18 = require("../assets/pictures/photos/2017/18.jpg");
const p17_19 = require("../assets/pictures/photos/2017/19.jpg");
const p17_20 = require("../assets/pictures/photos/2017/20.jpg");
const p17_21 = require("../assets/pictures/photos/2017/21.jpg");
const p17_22 = require("../assets/pictures/photos/2017/22.jpg");
const p17_23 = require("../assets/pictures/photos/2017/23.jpg");
const p17_24 = require("../assets/pictures/photos/2017/24.jpg");
const p17_25 = require("../assets/pictures/photos/2017/25.jpg");
const p17_26 = require("../assets/pictures/photos/2017/26.jpg");
const p17_27 = require("../assets/pictures/photos/2017/27.jpg");

const p18_1_t = require("../assets/pictures/photos/2018/1_t.jpg");
const p18_2_t = require("../assets/pictures/photos/2018/2_t.jpg");
const p18_3_t = require("../assets/pictures/photos/2018/3_t.jpg");

const p18_1 = require("../assets/pictures/photos/2018/1.jpg");
const p18_2 = require("../assets/pictures/photos/2018/2.jpg");
const p18_3 = require("../assets/pictures/photos/2018/3.jpg");
const p18_4 = require("../assets/pictures/photos/2018/4.jpg");
const p18_5 = require("../assets/pictures/photos/2018/5.jpg");
const p18_6 = require("../assets/pictures/photos/2018/6.jpg");
const p18_7 = require("../assets/pictures/photos/2018/7.jpg");
const p18_8 = require("../assets/pictures/photos/2018/8.jpg");
const p18_9 = require("../assets/pictures/photos/2018/9.jpg");
const p18_10 = require("../assets/pictures/photos/2018/10.jpg");
const p18_11 = require("../assets/pictures/photos/2018/11.jpg");
const p18_12 = require("../assets/pictures/photos/2018/12.jpg");
const p18_13 = require("../assets/pictures/photos/2018/13.jpg");
const p18_14 = require("../assets/pictures/photos/2018/14.jpg");
const p18_15 = require("../assets/pictures/photos/2018/15.jpg");
const p18_16 = require("../assets/pictures/photos/2018/16.jpg");
const p18_17 = require("../assets/pictures/photos/2018/17.jpg");
const p18_18 = require("../assets/pictures/photos/2018/18.jpg");
const p18_19 = require("../assets/pictures/photos/2018/19.jpg");
const p18_20 = require("../assets/pictures/photos/2018/20.jpg");
const p18_21 = require("../assets/pictures/photos/2018/21.jpg");
const p18_22 = require("../assets/pictures/photos/2018/22.jpg");
const p18_23 = require("../assets/pictures/photos/2018/23.jpg");
const p18_24 = require("../assets/pictures/photos/2018/24.jpg");
const p18_25 = require("../assets/pictures/photos/2018/25.jpg");
const p18_26 = require("../assets/pictures/photos/2018/26.jpg");
const p18_27 = require("../assets/pictures/photos/2018/27.jpg");

const PHOTOS = [
  {
    id: "photos_2017",
    size: { x: 600, y: 300 },
    pos: { x: -100, y: 160 },
    title: "2017",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [p17_1_t, p17_2_t, p17_3_t],
    content: (
      <PictureContainer
        pictures={[
          p17_1,
          p17_2,
          p17_3,
          p17_4,
          p17_5,
          p17_6,
          p17_7,
          p17_8,
          p17_9,
          p17_10,
          p17_11,
          p17_12,
          p17_13,
          p17_14,
          p17_15,
          p17_16,
          p17_17,
          p17_18,
          p17_19,
          p17_20,
          p17_21,
          p17_22,
          p17_23,
          p17_24,
          p17_25,
          p17_26,
          p17_27
        ]}
      />
    )
  },
  {
    id: "photos_2018",
    size: { x: 600, y: 300 },
    pos: { x: -100, y: 160 },
    title: "2018",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [p18_1_t, p18_2_t, p18_3_t],
    content: (
      <PictureContainer
        pictures={[
          p18_1,
          p18_2,
          p18_3,
          p18_4,
          p18_5,
          p18_6,
          p18_7,
          p18_8,
          p18_9,
          p18_10,
          p18_11,
          p18_12,
          p18_13,
          p18_14,
          p18_15,
          p18_16,
          p18_17,
          p18_18,
          p18_19,
          p18_20,
          p18_21,
          p18_22,
          p18_23,
          p18_24,
          p18_25,
          p18_26,
          p18_27
        ]}
      />
    )
  }
];

export default PHOTOS;