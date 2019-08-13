import React from "react";
import IconContainer from "../components/IconContainer/IconContainer";
import InfoCard from "../components/InfoCard/InfoCard";
import Typer from "../components/Typer/Typer";
import Toolbar from "../components/Toolbar/Toolbar";
import { FILE_TYPE } from "../constants";
import DEV from "./devContent";
import ME from "./meContent";

const DESKTOP = [
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
  },
  {
    id: "desktop_me",
    size: { x: 460, y: 340 },
    pos: { x: -200, y: 160 },
    title: "About Me",
    type: FILE_TYPE.FOLDER,
    content: <IconContainer direction="row" icons={ME} />
  },
  {
    id: "desktop_dev",
    size: { x: 400, y: 200 },
    pos: { x: -300, y: 200 },
    title: "Dev Projects",
    type: FILE_TYPE.TEXT,
    content: (
      <div className={FILE_TYPE.TEXT}>
        <Toolbar url="localhost:3000"/>
        <h3>Dev Projects</h3>
        <InfoCard src="https://www.w3schools.com/w3css/img_lights.jpg" title="This is title" description="This is a description. This is a description. This is a description."/>
        <InfoCard src="https://www.w3schools.com/w3css/img_lights.jpg" title="This is another title" description="This description. d is a deddddddddscription. This is a description."/>
      </div>
    )
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
