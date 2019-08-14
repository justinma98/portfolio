import React from "react";

const bruinhub_pic = require("../assets/pictures/bruinhub.gif");
const color_pic = require("../assets/pictures/color.gif");
const pavve_pic = require("../assets/pictures/pavve.gif");

const DEV = [
  {
    title: "BruinHub",
    src: bruinhub_pic,
    description: (
      <div>
        <p>A web app for planning and recommending classes for UCLA students</p>
        <p>
          Built frontend in React and integrated Redux to achieve a persistent
          state across pages. Implemented a fluid drag and drop functionality
          for adding classes into the calendar.
        </p>
      </div>
    ),
    github: "https://github.com/ucladevx/Aphrodite"
  },
  {
    src: color_pic,
    link: "https://styvone.github.io/color/",
    title: "Color",
    description: (
      <div>
        <p>
          A drawing web app that generates musical notes using pattern
          recognition
        </p>
        <p>
          Built in frontend React and created a history data structure for
          undoing and redoing brush strokes. Implemented an algorithm for
          generating paintbrush strokes based on mouse velocity.
        </p>
      </div>
    ),
    github: "https://github.com/UCLA-Creative-Labs/color"
  },
  {
    src: pavve_pic,
    link: "https://justinma98.github.io/pavve/",
    title: "Pavve",
    description: (
      <div>
        <p>
          An endless mini game where the game environment is generated from the
          mouse's path
        </p>
        <p>Built in React.</p>
      </div>
    ),
    github: "https://github.com/justinma98/pavve"
  }
];

export default DEV;
