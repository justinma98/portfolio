import React, { useState, useEffect } from "react";
import "./Typer.scss";

const typer = props => {
  let [pos, setPos] = useState(0);
  let { phrase, speed, delay } = props;

  useEffect(() => {
    setTimeout(() => type(), delay);
  }, []);

  const type = () => {
    if (pos < phrase.length) {
      setPos(++pos);
      setTimeout(() => type(), speed);
    }
  };
  return <p className="typer">{phrase.slice(0, pos)}</p>;
};

export default typer;

typer.defaultProps = { speed: 28, delay: 0 };
