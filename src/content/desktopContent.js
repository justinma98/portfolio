import React from "react";
import IconContainer from "../components/IconContainer/IconContainer";
import { FILE_TYPE } from "../constants";
import DEV from "./devContent";

const DESKTOP = [
  {
    id: "desktop_readme",
    size: { x: 440, y: 300 },
    pos: { x: -280, y: 120 },
    title: "README.md",
    type: FILE_TYPE.TEXT,
    content: (
      <div className={FILE_TYPE.TEXT}>
        <p>Hello and Welcome!</p>
        <p>
          My name is Justin Ma and this is a portfolio of my creative and coding
          work
        </p>
        <p>
          Feel free to drag, scale, and close these windows just like you would
          on a regular desktop
        </p>
        <p>Have fun exploring!</p>
        <img
          className="picture"
          alt="northern lights"
          src="https://www.w3schools.com/w3css/img_lights.jpg"
        />
      </div>
    )
  },
  {
    id: "desktop_me",
    size: { x: 400, y: 200 },
    pos: { x: -250, y: 160 },
    title: "About Me",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" length={4} icons={[]} />
  },
  {
    id: "desktop_dev",
    size: { x: 400, y: 200 },
    pos: { x: -220, y: 200 },
    title: "Dev Projects",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" length={4} icons={DEV} />
  },
  {
    id: "desktop_photos",
    size: { x: 350, y: 250 },
    pos: { x: -190, y: 240 },
    title: "Photography",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" length={3} icons={[]} />
  }
];

export default DESKTOP;
