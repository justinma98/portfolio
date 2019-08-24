import React from "react";
import { FILE_TYPE } from "../constants";
import resume_pic from "../assets/files/Justin_Ma.svg";
import resume_pdf from "../assets/files/Justin_Ma.pdf";

const me_photo = require("../assets/pictures/background.jpg");

const ME = [
  {
    id: "me_text",
    size: { x: 400, y: 260 },
    pos: { x: -260, y: 120 },
    title: "About_Me.txt",
    type: FILE_TYPE.TEXT,
    content: (
      <div className={FILE_TYPE.TEXT}>
        <p>
          <a href={resume_pdf} download>
            Resume
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/justinma98/" target="_blank">
            LinkedIn
          </a>
        </p>
        <p>
          <a href="https://github.com/justinma98" target="_blank">
            GitHub
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com/_justma/" target="_blank">
            Instagram
          </a>
        </p>
      </div>
    )
  },
  {
    id: "me_resume",
    size: { x: 600, y: 350 },
    pos: { x: -300, y: 80 },
    title: "Resume.pdf",
    type: FILE_TYPE.PDF,
    source: resume_pic,
    content: (
      <div>
        <img className={FILE_TYPE.PDF} alt="resume" src={resume_pic} />
        <a className="downloadIcon" href={resume_pdf} download />
      </div>
    )
  },
  {
    id: "me_photo",
    size: { x: 530, y: 320 },
    pos: { x: -100, y: 220 },
    title: "me.jpg",
    type: FILE_TYPE.PICTURE,
    source: me_photo,
    content: <img className={FILE_TYPE.PICTURE} alt="me" src={me_photo} />
  }
];

export default ME;
