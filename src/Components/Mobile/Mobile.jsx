import React, { useEffect } from "react";
import "./Mobile.scss";
import ME from "../../content/meContent";

const mobile = () => {
  useEffect(() => {
    let mobileContainer = document.getElementById("mobileContainer");
    setTimeout(() => (mobileContainer.style.width = "calc(100% - 40px)"), 200);
    setTimeout(() => {
      mobileContainer.style.transition = "all 1s ease";
      mobileContainer.style.height = "calc(100% - 80px)"
    }, 700);
  }, []);
  let aboutMe = ME[0].content;

  return (
    <div className="mobile">
      <div id="mobileContainer" className="mobile__container">
        <p className="mobile__header">Justin Ma</p>
        <div className="mobile__me">{aboutMe}</div>
        <p className="mobile__footer">
          Please visit this page on desktop for the complete portfolio
        </p>
      </div>
    </div>
  );
};

export default mobile;
