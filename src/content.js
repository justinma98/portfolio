import React from "react";
import IconContainer from "./components/IconContainer/IconContainer";

const WINDOW_TYPE = {
  PICTURE: "picture",
  FOLDER: "folder",
  TEXT: "text"
};

const FILE1 = [
  {
    id: "test1",
    size: { x: 400, y: 200 },
    pos: { x: 200, y: 100 },
    windowTitle: "Northern Lights.jpg",
    iconTitle: "Northern Lights.jpg",
    type: WINDOW_TYPE.PICTURE,
    content: (
      <img
        className={WINDOW_TYPE.PICTURE}
        alt="northern lights"
        src="https://www.w3schools.com/w3css/img_lights.jpg"
      />
    )
  },
  {
    id: "test2",
    size: { x: 200, y: 250 },
    pos: { x: 250, y: 150 },
    windowTitle: "Window Title 2",
    iconTitle: "IconTitle2",
    type: WINDOW_TYPE.FOLDER
  },
  {
    id: "test3",
    size: { x: 450, y: 300 },
    pos: { x: 300, y: 200 },
    windowTitle: "WWWWWWWWWW Title 3",
    iconTitle: "IconTitle3",
    type: WINDOW_TYPE.PICTURE
  },
  {
    id: "test4",
    size: { x: 300, y: 200 },
    pos: { x: 150, y: 250 },
    windowTitle: "iiiiiiii Title 3",
    iconTitle: "IconTitle3",
    type: WINDOW_TYPE.PICTURE
  }
];

export const DESKTOP = [
  {
    id: "test1",
    size: { x: 400, y: 200 },
    pos: { x: 200, y: 100 },
    windowTitle: "Northern Lights.jpg",
    iconTitle: "Northern Lights.jpg",
    type: WINDOW_TYPE.PICTURE,
    content: (
      <img
        className={WINDOW_TYPE.PICTURE}
        alt="northern lights"
        src="https://www.w3schools.com/w3css/img_lights.jpg"
      />
    )
  },
  {
    id: "test2",
    size: { x: 350, y: 250 },
    pos: { x: 250, y: 150 },
    windowTitle: "Folder",
    iconTitle: "Folder",
    type: WINDOW_TYPE.FOLDER,
    content: (
      <IconContainer
        style={{ zoom: "0.5" }}
        direction="row"
        length={3}
        icons={FILE1}
      />
    )
  },
  {
    id: "test3",
    size: { x: 450, y: 300 },
    pos: { x: 300, y: 200 },
    windowTitle: "File.txt",
    iconTitle: "File.txt",
    type: WINDOW_TYPE.TEXT,
    content: (
      <div className={WINDOW_TYPE.TEXT}>
        Here is a paragraph Here is a paragraph Here is a paragraph Here is a
        paragraph
        <img
          className="picture"
          alt="northern lights"
          src="https://www.w3schools.com/w3css/img_lights.jpg"
        />
      </div>
    )
  },
  {
    id: "test4",
    size: { x: 300, y: 200 },
    pos: { x: 150, y: 250 },
    windowTitle: "iiiiiiii Title 3",
    iconTitle: "IconTitle3",
    type: WINDOW_TYPE.PICTURE
  }
];
