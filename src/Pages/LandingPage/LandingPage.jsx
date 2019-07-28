import React from "react";
import "./LandingPage.scss";
import IconContainer from "../../components/IconContainer/IconContainer";
import WindowContainer from "../../components/WindowContainer/WindowContainer";
import DESKTOP from "../../content/desktopContent";
import ROOT from "../../content/rootContent";

const landingPage = () => {
  return (
    <div>
      <WindowContainer windows={ROOT} />
      <IconContainer icons={DESKTOP} direction="column" length={5} />
    </div>
  );
};

export default landingPage;
