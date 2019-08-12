import React from "react";
import { FILE_TYPE } from "../constants";
import resume from "../assets/files/Justin_Ma.svg";

const me1 = require("../assets/pictures/background.jpg");

const ME = [
  {
    id: "me_text",
    size: { x: -400, y: 200 },
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
    id: "me_resume",
    pos: { x: -400, y: 80 },
    size: { x: 600, y: 350 },
    title: "Resume.pdf",
    type: FILE_TYPE.PDF,
    source: resume,
    content: (
      <div>
        <img className={FILE_TYPE.VIDEO} alt="resume" src={resume} />
        <a
          className="downloadIcon"
          href="/static/media/Justin_Ma.5f2841f1.pdf"
          download
        />
      </div>
    )
  }
];

export default ME;