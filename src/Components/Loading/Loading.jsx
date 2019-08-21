import React, { useState, useEffect } from "react";
import "./Loading.scss";
import { NUM_WINDOWS } from "../../constants";
import { getNumWindows } from "../../utils";

const loading = props => {
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);

  let {loadingDone} = props;
  let realInterval;
  let fakePercent = 0;

  useEffect(() => {
    realInterval = setInterval(() => updatePercent(), 500);
  }, []);

  const updatePercent = () => {
    fakePercent += 30;
    let p = getNumWindows() / NUM_WINDOWS;
    setPercent(Math.min(100 * p + fakePercent, 100));
    if (p === 1) {
      clearInterval(realInterval);
      closeLoading();
    }
  };

  const closeLoading = () => {
    setTimeout(() => {
      setOpacity(0);
      loadingDone();
    }, 1000);
    setTimeout(() => setLoading(false), 2000);
  };

  return loading ? (
    <div className="loading" style={{ opacity: opacity }}>
      <div className="loading__message">Loading...</div>
      <div className="loading__barContainer">
        <div className="loading__bar" style={{ width: percent + "%" }} />
      </div>
    </div>
  ) : null;
};

export default loading;
