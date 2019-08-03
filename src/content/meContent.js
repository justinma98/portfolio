import React from "react";
import { FILE_TYPE } from "../constants";

const me1 = require("../assets/pictures/background.jpg");

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
  }
];

export default ME;
