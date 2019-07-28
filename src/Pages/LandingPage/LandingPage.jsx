import React from "react";
import "./LandingPage.scss";
import IconContainer from "../../components/IconContainer/IconContainer";
import DESKTOP from "../../content/desktopContent";

const landingPage = () => {
  return (
    <div>
      <div id="windowWrapper" className="windowWrapper" />
      <IconContainer icons={DESKTOP} direction="column" length={5} />
    </div>
  );
};

export default landingPage;