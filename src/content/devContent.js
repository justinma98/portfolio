import React from "react";
import IconContainer from "../components/IconContainer/IconContainer";
import { FILE_TYPE } from "../constants";

const DEV = [
  {
    id: "dev_1",
    size: { x: 350, y: 250 },
    pos: { x: -190, y: 240 },
    windowTitle: "Photography",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" length={3} icons={[]} />,
    src: "https://www.w3schools.com/w3css/img_lights.jpg",
    title: "Virtual Rooms",
    description: "this is virtual rooms",
    link: true,
    github: "https://github.com/justinma98/snackapp"
  },
  {
    id: "dev_2",
    size: { x: 350, y: 250 },
    pos: { x: -190, y: 240 },
    windowTitle: "Photography",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" length={3} icons={[]} />,
    src: "https://www.w3schools.com/w3css/img_lights.jpg",
    title: "Virtual Rooms 2",
    description: "this is virtual rooms 2",
    github: "https://github.com/justinma98/snackapp"
  },
  {
    id: "dev_3",
    size: { x: 350, y: 250 },
    pos: { x: -190, y: 240 },
    windowTitle: "Photography",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" length={3} icons={[]} />,
    src: "https://www.w3schools.com/w3css/img_lights.jpg",
    title: "Virtual Rooms 3",
    description: "this is virtual rooms 3"
  }
];

export default DEV;