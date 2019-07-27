import React from "react";
import "./LandingPage.scss";
import IconContainer from "../../components/IconContainer/IconContainer";
import WindowContainer from "../../components/WindowContainer/WindowContainer";
import { DESKTOP } from "../../content";

const landingPage = () => {
  return (
    <div>
      <WindowContainer windows={DESKTOP} />
      <IconContainer icons={DESKTOP} direction="column" length={5} />
    </div>
  );
};

export default landingPage;
