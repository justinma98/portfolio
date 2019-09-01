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

const p18a_1_t = require("../assets/pictures/photos/2018a/1_t.jpg");
const p18a_2_t = require("../assets/pictures/photos/2018a/2_t.jpg");
const p18a_3_t = require("../assets/pictures/photos/2018a/3_t.jpg");

const p18a_1 = require("../assets/pictures/photos/2018a/1.jpg");
const p18a_2 = require("../assets/pictures/photos/2018a/2.jpg");
const p18a_3 = require("../assets/pictures/photos/2018a/3.jpg");
const p18a_4 = require("../assets/pictures/photos/2018a/4.jpg");
const p18a_5 = require("../assets/pictures/photos/2018a/5.jpg");
const p18a_6 = require("../assets/pictures/photos/2018a/6.jpg");
const p18a_7 = require("../assets/pictures/photos/2018a/7.jpg");
const p18a_8 = require("../assets/pictures/photos/2018a/8.jpg");
const p18a_9 = require("../assets/pictures/photos/2018a/9.jpg");
const p18a_10 = require("../assets/pictures/photos/2018a/10.jpg");
const p18a_11 = require("../assets/pictures/photos/2018a/11.jpg");
const p18a_12 = require("../assets/pictures/photos/2018a/12.jpg");
const p18a_13 = require("../assets/pictures/photos/2018a/13.jpg");
const p18a_14 = require("../assets/pictures/photos/2018a/14.jpg");
const p18a_15 = require("../assets/pictures/photos/2018a/15.jpg");
const p18a_16 = require("../assets/pictures/photos/2018a/16.jpg");
const p18a_17 = require("../assets/pictures/photos/2018a/17.jpg");
const p18a_18 = require("../assets/pictures/photos/2018a/18.jpg");
const p18a_19 = require("../assets/pictures/photos/2018a/19.jpg");
const p18a_20 = require("../assets/pictures/photos/2018a/20.jpg");
const p18a_21 = require("../assets/pictures/photos/2018a/21.jpg");
const p18a_22 = require("../assets/pictures/photos/2018a/22.jpg");
const p18a_23 = require("../assets/pictures/photos/2018a/23.jpg");
const p18a_24 = require("../assets/pictures/photos/2018a/24.jpg");
const p18a_25 = require("../assets/pictures/photos/2018a/25.jpg");
const p18a_26 = require("../assets/pictures/photos/2018a/26.jpg");
const p18a_27 = require("../assets/pictures/photos/2018a/27.jpg");
const p18a_28 = require("../assets/pictures/photos/2018a/28.jpg");
const p18a_29 = require("../assets/pictures/photos/2018a/29.jpg");

const p18b_1_t = require("../assets/pictures/photos/2018b/1_t.jpg");
const p18b_2_t = require("../assets/pictures/photos/2018b/2_t.jpg");
const p18b_3_t = require("../assets/pictures/photos/2018b/3_t.jpg");

const p18b_1 = require("../assets/pictures/photos/2018b/1.jpg");
const p18b_2 = require("../assets/pictures/photos/2018b/2.jpg");
const p18b_3 = require("../assets/pictures/photos/2018b/3.jpg");
const p18b_4 = require("../assets/pictures/photos/2018b/4.jpg");
const p18b_5 = require("../assets/pictures/photos/2018b/5.jpg");
const p18b_6 = require("../assets/pictures/photos/2018b/6.jpg");
const p18b_7 = require("../assets/pictures/photos/2018b/7.jpg");
const p18b_8 = require("../assets/pictures/photos/2018b/8.jpg");
const p18b_9 = require("../assets/pictures/photos/2018b/9.jpg");
const p18b_10 = require("../assets/pictures/photos/2018b/10.jpg");
const p18b_11 = require("../assets/pictures/photos/2018b/11.jpg");
const p18b_12 = require("../assets/pictures/photos/2018b/12.jpg");
const p18b_13 = require("../assets/pictures/photos/2018b/13.jpg");
const p18b_14 = require("../assets/pictures/photos/2018b/14.jpg");
const p18b_15 = require("../assets/pictures/photos/2018b/15.jpg");
const p18b_16 = require("../assets/pictures/photos/2018b/16.jpg");
const p18b_17 = require("../assets/pictures/photos/2018b/17.jpg");
const p18b_18 = require("../assets/pictures/photos/2018b/18.jpg");
const p18b_19 = require("../assets/pictures/photos/2018b/19.jpg");

const p18c_1_t = require("../assets/pictures/photos/2018c/1_t.jpg");
const p18c_2_t = require("../assets/pictures/photos/2018c/2_t.jpg");
const p18c_3_t = require("../assets/pictures/photos/2018c/3_t.jpg");

const p18c_1 = require("../assets/pictures/photos/2018c/1.jpg");
const p18c_2 = require("../assets/pictures/photos/2018c/2.jpg");
const p18c_3 = require("../assets/pictures/photos/2018c/3.jpg");
const p18c_4 = require("../assets/pictures/photos/2018c/4.jpg");
const p18c_5 = require("../assets/pictures/photos/2018c/5.jpg");
const p18c_6 = require("../assets/pictures/photos/2018c/6.jpg");
const p18c_7 = require("../assets/pictures/photos/2018c/7.jpg");
const p18c_8 = require("../assets/pictures/photos/2018c/8.jpg");
const p18c_9 = require("../assets/pictures/photos/2018c/9.jpg");
const p18c_10 = require("../assets/pictures/photos/2018c/10.jpg");
const p18c_11 = require("../assets/pictures/photos/2018c/11.jpg");
const p18c_12 = require("../assets/pictures/photos/2018c/12.jpg");
const p18c_13 = require("../assets/pictures/photos/2018c/13.jpg");
const p18c_14 = require("../assets/pictures/photos/2018c/14.jpg");
const p18c_15 = require("../assets/pictures/photos/2018c/15.jpg");
const p18c_16 = require("../assets/pictures/photos/2018c/16.jpg");
const p18c_17 = require("../assets/pictures/photos/2018c/17.jpg");
const p18c_18 = require("../assets/pictures/photos/2018c/18.jpg");
const p18c_19 = require("../assets/pictures/photos/2018c/19.jpg");
const p18c_20 = require("../assets/pictures/photos/2018c/20.jpg");
const p18c_21 = require("../assets/pictures/photos/2018c/21.jpg");

const p19a_1_t = require("../assets/pictures/photos/2019a/1_t.jpg");
const p19a_2_t = require("../assets/pictures/photos/2019a/2_t.jpg");
const p19a_3_t = require("../assets/pictures/photos/2019a/3_t.jpg");

const p19a_1 = require("../assets/pictures/photos/2019a/1.jpg");
const p19a_2 = require("../assets/pictures/photos/2019a/2.jpg");
const p19a_3 = require("../assets/pictures/photos/2019a/3.jpg");
const p19a_4 = require("../assets/pictures/photos/2019a/4.jpg");
const p19a_5 = require("../assets/pictures/photos/2019a/5.jpg");
const p19a_6 = require("../assets/pictures/photos/2019a/6.jpg");
const p19a_7 = require("../assets/pictures/photos/2019a/7.jpg");
const p19a_8 = require("../assets/pictures/photos/2019a/8.jpg");
const p19a_9 = require("../assets/pictures/photos/2019a/9.jpg");
const p19a_10 = require("../assets/pictures/photos/2019a/10.jpg");
const p19a_11 = require("../assets/pictures/photos/2019a/11.jpg");
const p19a_12 = require("../assets/pictures/photos/2019a/12.jpg");
const p19a_13 = require("../assets/pictures/photos/2019a/13.jpg");
const p19a_14 = require("../assets/pictures/photos/2019a/14.jpg");
const p19a_15 = require("../assets/pictures/photos/2019a/15.jpg");
const p19a_16 = require("../assets/pictures/photos/2019a/16.jpg");
const p19a_17 = require("../assets/pictures/photos/2019a/17.jpg");
const p19a_18 = require("../assets/pictures/photos/2019a/18.jpg");
const p19a_19 = require("../assets/pictures/photos/2019a/19.jpg");
const p19a_20 = require("../assets/pictures/photos/2019a/20.jpg");
const p19a_21 = require("../assets/pictures/photos/2019a/21.jpg");
const p19a_22 = require("../assets/pictures/photos/2019a/22.jpg");

const PHOTOS = [
  {
    id: "photos_2017",
    size: { x: 400, y: 300 },
    pos: { x: -200, y: 70 },
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
    id: "photos_2018a",
    size: { x: 400, y: 300 },
    pos: { x: -170, y: 100 },
    title: "2018(1/3)",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [p18a_1_t, p18a_2_t, p18a_3_t],
    content: (
      <PictureContainer
        pictures={[
          p18a_1,
          p18a_2,
          p18a_3,
          p18a_4,
          p18a_5,
          p18a_6,
          p18a_7,
          p18a_8,
          p18a_9,
          p18a_10,
          p18a_11,
          p18a_12,
          p18a_13,
          p18a_14,
          p18a_15,
          p18a_16,
          p18a_17,
          p18a_18,
          p18a_19,
          p18a_20,
          p18a_21,
          p18a_22,
          p18a_23,
          p18a_24,
          p18a_25,
          p18a_26,
          p18a_27,
          p18a_28,
          p18a_29
        ]}
      />
    )
  },
  {
    id: "photos_2018b",
    size: { x: 400, y: 300 },
    pos: { x: -140, y: 130 },
    title: "2018(2/3) China",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [p18b_1_t, p18b_2_t, p18b_3_t],
    content: (
      <PictureContainer
        pictures={[
          p18b_1,
          p18b_2,
          p18b_3,
          p18b_4,
          p18b_5,
          p18b_6,
          p18b_7,
          p18b_8,
          p18b_9,
          p18b_10,
          p18b_11,
          p18b_12,
          p18b_13,
          p18b_14,
          p18b_15,
          p18b_16,
          p18b_17,
          p18b_18,
          p18b_19
        ]}
      />
    )
  },
  {
    id: "photos_2018c",
    size: { x: 400, y: 300 },
    pos: { x: -110, y: 160 },
    title: "2018(3/3)",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [p18c_1_t, p18c_2_t, p18c_3_t],
    content: (
      <PictureContainer
        pictures={[
          p18c_1,
          p18c_2,
          p18c_3,
          p18c_4,
          p18c_5,
          p18c_6,
          p18c_7,
          p18c_8,
          p18c_9,
          p18c_10,
          p18c_11,
          p18c_12,
          p18c_13,
          p18c_14,
          p18c_15,
          p18c_16,
          p18c_17,
          p18c_18,
          p18c_19,
          p18c_20,
          p18c_21
        ]}
      />
    )
  },
  {
    id: "photos_2019a",
    size: { x: 400, y: 300 },
    pos: { x: -80, y: 190 },
    title: "2019",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [p19a_1_t, p19a_2_t, p19a_3_t],
    content: (
      <PictureContainer
        pictures={[
          p19a_1,
          p19a_2,
          p19a_3,
          p19a_4,
          p19a_5,
          p19a_6,
          p19a_7,
          p19a_8,
          p19a_9,
          p19a_10,
          p19a_11,
          p19a_12,
          p19a_13,
          p19a_14,
          p19a_15,
          p19a_16,
          p19a_17,
          p19a_18,
          p19a_19,
          p19a_20,
          p19a_21,
          p19a_22
        ]}
      />
    )
  }
];

export default PHOTOS;