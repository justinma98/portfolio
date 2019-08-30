import React from "react";
import IconContainer from "../components/Icon/IconContainer";
import InfoCard from "../components/InfoCard/InfoCard";
import Typer from "../components/Typer/Typer";
import TyperContainer from "../components/Typer/TyperContainer";
import Toolbar from "../components/Toolbar/Toolbar";
import { FILE_TYPE } from "../constants";
import DEV from "./devContent";
import ME from "./meContent";
import DESIGN from "./designContent";
import ART from "./artContent";
import PHOTOS from "./photoContent";
import MOVIES from "./movieContent";

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
    size: { x: 400, y: 250 },
    pos: { x: -370, y: 270 },
    title: "Graphic Design",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" icons={DESIGN} />
  },
  {
    id: "desktop_photos",
    size: { x: 350, y: 250 },
    pos: { x: -290, y: 240 },
    title: "Photography",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" icons={PHOTOS} />
  },
  {
    id: "desktop_art",
    size: { x: 350, y: 250 },
    pos: { x: -270, y: 180 },
    title: "Art",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" icons={ART} />
  },
  {
    id: "desktop_movies",
    size: { x: 350, y: 250 },
    pos: { x: 0, y: 240 },
    title: "Movies",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" icons={MOVIES} />
  },
  {
    id: "desktop_readme",
    size: { x: 370, y: 260 },
    pos: { x: 50, y: 120 },
    title: "README.md",
    type: FILE_TYPE.TEXT,
    content: (
      <TyperContainer className={FILE_TYPE.TEXT}>
        <Typer delay={600} phrase="Hello!" />
        <Typer
          delay={1400}
          phrase="My name's Justin Ma               and this is a portfolio of my creative       and coding work."
        />
        <Typer delay={5100} phrase="Click around to explore:)" />
      </TyperContainer>
    )
  }
];

export default DESKTOP;
