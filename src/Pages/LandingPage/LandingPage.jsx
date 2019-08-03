import React from "react";
import "./LandingPage.scss";
import IconContainer from "../../components/IconContainer/IconContainer";
import DESKTOP from "../../content/desktopContent";

const landingPage = () => {
  return (
    <div className="landingPage">
      <div className="background" />
      <div id="windowSpawn" className="windowSpawn" />
      <IconContainer icons={DESKTOP} direction="column" length={0} />
    </div>
  );
};

export default landingPage;
