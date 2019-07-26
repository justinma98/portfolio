import React from 'react';
import IconContainer from "./components/IconContainer/IconContainer";
const FILE1 = [
  {
    id: "test1",
    width: 400,
    height: 200,
    posX: 200,
    posY: 100,
    windowTitle: "Northern Lights.jpg",
    iconTitle: "Northern Lights.jpg",
    type: "-picture",
    content: (
      <img
        className="picture"
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
    type: "-folder"
  },
  {
    id: "test3",
    width: 450,
    height: 300,
    posX: 300,
    posY: 200,
    windowTitle: "WWWWWWWWWW Title 3",
    iconTitle: "IconTitle3",
    type: "-picture"
  },
  {
    id: "test4",
    width: 300,
    height: 200,
    posX: 150,
    posY: 250,
    windowTitle: "iiiiiiii Title 3",
    iconTitle: "IconTitle3",
    type: "-picture"
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
    type: "-picture",
    content: (
      <img
        className="picture"
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
    type: "-folder",
    content: (
      <IconContainer
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
    type: "-text",
    content: (
      <div className="text">
        Here is a paragraph Here is a paragraph Here is a paragraph Here
        is a paragraph
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
    type: "-picture"
  }
];