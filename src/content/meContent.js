import React from "react";
import { FILE_TYPE } from "../constants";
import resume from "../assets/files/Justin_Ma.svg";

const ME = [
  {
    id: "me_text",
    size: { x: 400, y: 200 },
    pos: { x: -260, y: 100 },
    title: "About_Me.txt",
    type: FILE_TYPE.TEXT,
    content: (
      <div className={FILE_TYPE.TEXT}>
        <p>My name is Justin</p>
        <p>My name is Justin</p>
      </div>
    )
  },
  {
    id: "me_resume",
    size: { x: 600, y: 350 },
    pos: { x: -400, y: 80 },
    title: "Resume.pdf",
    type: FILE_TYPE.PDF,
    source: resume,
    content: (
      <div>
        <img className={FILE_TYPE.PDF} alt="resume" src={resume} />
        <a
          className="downloadIcon"
          href="/static/media/Justin_Ma.5f2841f1.pdf"
          download
        />
      </div>
    )
  },
  {
    id: "me_novel",
    size: { x: 400, y: 200 },
    pos: { x: 0, y: 130 },
    title: "novel_first_draft.txt",
    type: FILE_TYPE.TEXT,
    content: (
      <div className={FILE_TYPE.TEXT}>
        <p>All work and no play makes Justin a dull boy.</p>
        <p>All work and no play makes Justin a dull boy.</p>
        <p>All work and no play makes Justin a dull boy.</p>
        <p>All work and no play makes Justin a dull boy.</p>
        <p>All work and no play makes Justin a dull boy.</p>
        <p>All work and no play makes Justin a dull boy.</p>
        <p>
          All work and no play makes Justin a dull boy. All work and no play
          makes Justin a dull boy. All work and no play makes Justin a dull
          boy.All work and no play makes Justin a dull boy.
        </p>
      </div>
    )
  }
];

export default ME;
