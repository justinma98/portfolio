import React from "react";
import { FILE_TYPE } from "../constants";

const me1 = require("../assets/pictures/me1.jpg");
const me2 = require("../assets/pictures/me2.jpg");
const me3 = require("../assets/pictures/me3.jpg");
const me4 = require("../assets/pictures/me4.jpg");
const me5 = require("../assets/pictures/me5.jpg");
const me6 = require("../assets/pictures/me6.jpg");
const me7 = require("../assets/pictures/me7.jpg");

const ME = [
  {
    id: "me_text",
    size: { x: 400, y: 200 },
    pos: { x: 200, y: 100 },
    title: "About_Me.txt",
    type: FILE_TYPE.TEXT,
    content: (
      <div className={FILE_TYPE.TEXT}>
        <h1>About me...</h1>
      </div>
    )
  },
  {
    id: "me_pic1",
    pos: { x: 250, y: 150 },
    title: "IMG_0617.jpg",
    type: FILE_TYPE.PICTURE,
    source: me1,
    content: <img className={FILE_TYPE.PICTURE} alt="me_pic1" src={me1} />
  },
  {
    id: "me_pic2",
    size: { x: 200, y: 250 },
    pos: { x: 250, y: 150 },
    title: "IMG_0617.jpg",
    type: FILE_TYPE.PICTURE,
    source: me2,
    content: <img className={FILE_TYPE.PICTURE} alt="me_pic2" src={me2} />
  },
  {
    id: "me_pic3",
    size: { x: 200, y: 250 },
    pos: { x: 250, y: 150 },
    title: "IMG_0617.jpg",
    type: FILE_TYPE.PICTURE,
    source: me3,
    content: <img className={FILE_TYPE.PICTURE} alt="me_pic3" src={me3} />
  },
  {
    id: "me_pic4",
    size: { x: 200, y: 250 },
    pos: { x: 250, y: 150 },
    title: "IMG_0617.jpg",
    type: FILE_TYPE.PICTURE,
    source: me4,
    content: <img className={FILE_TYPE.PICTURE} alt="me_pic4" src={me4} />
  },
  {
    id: "me_pic5",
    size: { x: 200, y: 250 },
    pos: { x: 250, y: 150 },
    title: "IMG_0617.jpg",
    type: FILE_TYPE.PICTURE,
    source: me5,
    content: <img className={FILE_TYPE.PICTURE} alt="me_pic5" src={me5} />
  },
  {
    id: "me_pic6",
    size: { x: 200, y: 250 },
    pos: { x: 250, y: 150 },
    title: "IMG_0617.jpg",
    type: FILE_TYPE.PICTURE,
    source: me6,
    content: <img className={FILE_TYPE.PICTURE} alt="me_pic6" src={me6} />
  },
  {
    id: "me_pic7",
    size: { x: 200, y: 250 },
    pos: { x: 250, y: 150 },
    title: "IMG_0617.jpg",
    type: FILE_TYPE.PICTURE,
    source: me7,
    content: <img className={FILE_TYPE.PICTURE} alt="me_pic7" src={me7} />
  }
];

export default ME;
