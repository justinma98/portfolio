import React from "react";
import "./LandingPage.scss";
import IconContainer from "../../components/IconContainer/IconContainer";
import Icon from "../../components/Icon/Icon";
import DESKTOP from "../../content/desktopContent";
import { FILE_TYPE } from "../../constants";
import RECYCLE from "../../content/recycleContent";

const landingPage = () => {
  return (
    <div className="landingPage">
      <div className="background" />
      <div id="windowSpawn" className="windowSpawn" />
      <IconContainer icons={DESKTOP} direction="column" length={0} />
      <div className="recycleIcon">
        <Icon
          id="desktop_recycle"
          size={{ x: 500, y: 300 }}
          pos={{ x: -250, y: 220 }}
          title="Recycling Bin"
          type={FILE_TYPE.RECYCLE}
          content={<IconContainer direction="row" icons={RECYCLE} />}
        />
      </div>
    </div>
  );
};

export default landingPage;
