import React from "react";
import IconContainer from "../components/IconContainer/IconContainer";
import InfoCard from "../components/InfoCard/InfoCard";
import Typer from "../components/Typer/Typer";
import Toolbar from "../components/Toolbar/Toolbar";
import PictureContainer from "../components/PictureContainer/PictureContainer";
import { FILE_TYPE } from "../constants";
import DEV from "./devContent";
import ME from "./meContent";
import RECYCLE from "./recycleContent";

const me1 = require("../assets/pictures/me1.jpg");
const me2 = require("../assets/pictures/me2.jpg");
const me3 = require("../assets/pictures/me3.jpg");
const me4 = require("../assets/pictures/me4.jpg");
const me5 = require("../assets/pictures/me5.jpg");
const me6 = require("../assets/pictures/me6.jpg");

const DESKTOP = [
  {
    id: "desktop_me",
    size: { x: 460, y: 340 },
    pos: { x: -200, y: 160 },
    title: "About Me",
    type: FILE_TYPE.COMPUTER,
    content: <IconContainer direction="row" icons={ME} />
  },
  {
    id: "desktop_dev",
    size: { x: 700, y: 400 },
    pos: { x: -300, y: 100 },
    title: "Dev Projects",
    type: FILE_TYPE.EXPLORER,
    content: (
      <div className={FILE_TYPE.EXPLORER}>
        <Toolbar url="localhost:3000" />
        <h3>Dev Projects</h3>
        {DEV.map((e, i) => (
          <InfoCard key={i} {...e} />
        ))}
      </div>
    )
  },
  {
    id: "desktop_design",
    size: { x: 350, y: 250 },
    pos: { x: -190, y: 240 },
    title: "Graphic design is my passion",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" length={4} icons={[]} />
  },
  {
    id: "desktop_photos",
    size: { x: 350, y: 250 },
    pos: { x: -190, y: 240 },
    title: "Photography",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" length={3} icons={[]} />
  },
  {
    id: "desktop_art",
    size: { x: 350, y: 250 },
    pos: { x: -190, y: 240 },
    title: "Art",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" length={3} icons={[]} />
  },
  {
    id: "desktop_movies",
    size: { x: 350, y: 250 },
    pos: { x: -190, y: 240 },
    title: "Movies",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" length={3} icons={[]} />
  },
  {
    id: "desktop_test_2",
    size: { x: 600, y: 300 },
    pos: { x: -100, y: 160 },
    title: "Photos",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [me1, me2, me3],
    content: (
      <PictureContainer pictures={[me1, me2, me3, me4, me5, me6]}/>
    )
  },
  {
    id: "desktop_readme",
    size: { x: 400, y: 260 },
    pos: { x: 50, y: 120 },
    title: "README.md",
    type: FILE_TYPE.TEXT,
    content: (
      <div className={FILE_TYPE.TEXT}>
        <Typer delay={600} phrase="Hello!" />
        <br />
        <Typer
          delay={1400}
          phrase="My name's Justin Ma               and this is a portfolio of my creative       and coding work."
        />
        <br />
        <Typer delay={5000} phrase="Click around to explore:)" />
      </div>
    )
  }
];

export default DESKTOP;
