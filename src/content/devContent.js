import React from "react";
import { FILE_TYPE } from "../constants";

const virtualrooms_pic = require("../assets/pictures/dev/virtualrooms.gif");
const bruinhub_pic = require("../assets/pictures/dev/bruinhub.gif");
const snackapp_pic = require("../assets/pictures/dev/snackapp.gif");
const realitysim_pic = require("../assets/pictures/dev/realitysim.gif");
const color_pic = require("../assets/pictures/dev/color.gif");
const spaceexp_pic = require("../assets/pictures/dev/spaceexp.gif");
const pavve_pic = require("../assets/pictures/dev/pavve.gif");

const DEV = [
  {
    id: "dev_vr",
    pos: { x: -300, y: 200 },
    windowTitle: "Virtual_Rooms.mp4",
    type: FILE_TYPE.VIDEO,
    content: (
      <iframe
        className={FILE_TYPE.VIDEO}
        src="https://www.youtube.com/embed/d1zuhlXSpjo"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    title: "Virtual Rooms",
    link: true,
    src: virtualrooms_pic,
    description: (
      <div>
        <p>
          Winning MHacks hackathon submission for best use of Wayfair's 3D model
          database API. An iOS and Android app for creating and sharing VR
          interior room designs.
        </p>
        <p>
          Built in Unity. Implemented UI and functionality for adding,
          repositioning, and removing furniture.
        </p>
      </div>
    )
  },
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
    src: snackapp_pic,
    link: "https://justinma98.github.io/snackapp/",
    title: "Snack App",
    description: (
      <div>
        <p>A web app for rating and requesting office snacks</p>
        <p>
          Built frontend in React. Set up backend for receiving user ratings and
          requests using Firebase. Integrated a sorting algorithm to order
          snacks based on user preference.
        </p>
      </div>
    ),
    github: "https://github.com/justinma98/snackapp"
  },
  {
    id: "dev_realsim",
    pos: { x: -300, y: 200 },
    windowTitle: "The_Reality_Simulator.mp4",
    type: FILE_TYPE.VIDEO,
    content: (
      <iframe
        className={FILE_TYPE.VIDEO}
        src="https://www.youtube.com/embed/9zxBU82pECw"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    title: "The Reality Simulator",
    link: true,
    src: realitysim_pic,
    description: (
      <div>
        <p>
          An artistic environment visualizer. Takes in live readings from
          arduino temperature, brightness, and sound sensors. Generates a VR
          game environment based on data points. Ported to Oculus Rift.
        </p>
        <p>Built in Unity. Designed and developed VR environmnt.</p>
      </div>
    )
  },
  {
    id: "dev_spaceexp",
    pos: { x: -200, y: 200 },
    windowTitle: "Space_Expiration.mp4",
    type: FILE_TYPE.VIDEO,
    content: (
      <iframe
        className={FILE_TYPE.VIDEO}
        src="https://www.youtube.com/embed/lgOhS3oxDA8"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    title: "Space Expiration",
    link: true,
    src: spaceexp_pic,
    description: (
      <div>
        <p>
          A mobile bluetooth multiplayer game where up to 4 players work
          together to collect resources in space while avoiding the cosmic worm
          of doom.
        </p>
        <p>
          Built in Unity. Implemented joystick movement for ships. Created enemy
          attack algorithm based on multiple data points.
        </p>
      </div>
    )
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
          Built frontend in React and created a history data structure for
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
          mouse's path. Move around to find portals to the next world.
        </p>
        <p>Built in React.</p>
      </div>
    ),
    github: "https://github.com/justinma98/pavve"
  }
];

export default DEV;
