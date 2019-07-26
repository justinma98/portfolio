import React from 'react';
import IconContainer from "./components/IconContainer/IconContainer";

const WINDOW_TYPE = {
  PICTURE: "picture",
  FOLDER: "folder",
  TEXT: "text"
}

const FILE1 = [
  {
    id: "test1",
    width: 400,
    height: 200,
    posX: 200,
    posY: 100,
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
    width: 300,
    height: 250,
    posX: 250,
    posY: 150,
    windowTitle: "Window Title 2",
    iconTitle: "IconTitle2",
    type: WINDOW_TYPE.FOLDER
  },
  {
    id: "test3",
    width: 450,
    height: 300,
    posX: 300,
    posY: 200,
    windowTitle: "WWWWWWWWWW Title 3",
    iconTitle: "IconTitle3",
    type: WINDOW_TYPE.PICTURE
  },
  {
    id: "test4",
    width: 300,
    height: 200,
    posX: 150,
    posY: 250,
    windowTitle: "iiiiiiii Title 3",
    iconTitle: "IconTitle3",
    type: WINDOW_TYPE.PICTURE
  }
];

export const DESKTOP = [
  {
    id: "test1",
    width: 400,
    height: 200,
    posX: 200,
    posY: 100,
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
    width: 350,
    height: 250,
    posX: 250,
    posY: 150,
    windowTitle: "Folder",
    iconTitle: "Folder",
    type: WINDOW_TYPE.FOLDER,
    content: (
      <IconContainer
        style={{zoom:"0.5"}}
        direction="row"
        length={3}
        icons={FILE1}
      />
    )
  },
  {
    id: "test3",
    width: 450,
    height: 300,
    posX: 300,
    posY: 200,
    windowTitle: "File.txt",
    iconTitle: "File.txt",
    type: WINDOW_TYPE.TEXT,
    content: (
      <div className={WINDOW_TYPE.TEXT}>
        Here is a paragraph Here is a paragraph Here is a paragraph Here
        is a paragraph
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
    width: 300,
    height: 200,
    posX: 150,
    posY: 250,
    windowTitle: "iiiiiiii Title 3",
    iconTitle: "IconTitle3",
    type: WINDOW_TYPE.PICTURE
  }
];