import React from "react";
import PictureContainer from "../components/PictureContainer/PictureContainer";
import { FILE_TYPE } from "../constants";

const UCLA_1 = require("../assets/pictures/design/ucla/UCLA_1.png");
const UCLA_2 = require("../assets/pictures/design/ucla/UCLA_2.png");
const UCLA_3 = require("../assets/pictures/design/ucla/UCLA_3.png");
const UCLA_4 = require("../assets/pictures/design/ucla/UCLA_4.png");
const UCLA_5 = require("../assets/pictures/design/ucla/UCLA_5.png");
const UCLA_6 = require("../assets/pictures/design/ucla/UCLA_6.png");
const UCLA_7 = require("../assets/pictures/design/ucla/UCLA_7.png");
const UCLA_8 = require("../assets/pictures/design/ucla/UCLA_8.png");
const UCLA_9 = require("../assets/pictures/design/ucla/UCLA_9.png");
const UCLA_10 = require("../assets/pictures/design/ucla/UCLA_10.png");

const shirt_1 = require("../assets/pictures/design/shirts/shirt_1.png");
const shirt_2 = require("../assets/pictures/design/shirts/shirt_2.png");
const shirt_3 = require("../assets/pictures/design/shirts/shirt_3.png");
const shirt_4 = require("../assets/pictures/design/shirts/shirt_4.png");
const shirt_5 = require("../assets/pictures/design/shirts/shirt_5.png");
const shirt_6 = require("../assets/pictures/design/shirts/shirt_6.png");
const shirt_7 = require("../assets/pictures/design/shirts/shirt_7.png");
const shirt_8 = require("../assets/pictures/design/shirts/shirt_8.png");
const shirt_9 = require("../assets/pictures/design/shirts/shirt_9.png");

const misc_1 = require("../assets/pictures/design/misc/misc_1.png");
const misc_2 = require("../assets/pictures/design/misc/misc_2.png");
const misc_3 = require("../assets/pictures/design/misc/misc_3.png");
const misc_4 = require("../assets/pictures/design/misc/misc_4.png");
const misc_5 = require("../assets/pictures/design/misc/misc_5.png");

const DESIGN = [
  {
    id: "design_ucla",
    size: { x: 600, y: 300 },
    pos: { x: -100, y: 160 },
    title: "UCLA",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [UCLA_1, UCLA_2, UCLA_3],
    content: (
      <PictureContainer
        pictures={[
          UCLA_1,
          UCLA_2,
          UCLA_3,
          UCLA_4,
          UCLA_5,
          UCLA_6,
          UCLA_7,
          UCLA_8,
          UCLA_9,
          UCLA_10
        ]}
      />
    )
  },
  {
    id: "design_shirt",
    size: { x: 600, y: 300 },
    pos: { x: -100, y: 160 },
    title: "Tshirt designs",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [shirt_1, shirt_2, shirt_3],
    content: (
      <PictureContainer
        pictures={[
          shirt_1,
          shirt_2,
          shirt_3,
          shirt_4,
          shirt_5,
          shirt_6,
          shirt_7,
          shirt_8,
          shirt_9
        ]}
      />
    )
  },
  {
    id: "design_misc",
    size: { x: 600, y: 300 },
    pos: { x: -100, y: 160 },
    title: "Misc",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [misc_1, misc_2, misc_3],
    content: (
      <PictureContainer
        pictures={[
          misc_1,
          misc_2,
          misc_3,
          misc_4,
          misc_5
        ]}
      />
    )
  }
];

export default DESIGN;
