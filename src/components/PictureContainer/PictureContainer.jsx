import React, { useState } from "react";
import "./PictureContainer.scss";

const pictureContainer = props => {
  const [pos, setPos] = useState(0);
  let { pictures } = props;
  const length = pictures.length;

  const hasPic = position => {
    if (position < 0 || position > length - 1) return false;
    return true;
  };

  const movePos = offset => {
    let newPos = pos + offset;
    if (newPos < 0 || newPos > length - 1) return;
    setPos(newPos);
  };

  const renderRow = dir => {
    let row;
    let offset;
    switch (dir) {
      case "left":
        row = ["l3", "l2", "l1"];
        offset = pos - 3;
        break;
      case "right":
        row = ["r1", "r2", "r3"];
        offset = pos + 1;
        break;
      case "middle":
        row = ["m"];
        offset = pos;
        break;
    }

    return (
      <div className={"pictureContainer__row -" + dir}>
        {row.map((v, i) =>
          hasPic(i + offset) ? (
            <img
              key={i}
              className={"pictureContainer__row__pic -" + v}
              alt="picture"
              src={pictures[i + offset]}
              onClick={() => setPos(i + offset)}
            />
          ) : null
        )}
      </div>
    );
  };

  return (
    <div className="pictureContainer">
      <div className="pictureContainer__container">
        <img
          className="pictureContainer__picture"
          alt="picture"
          src={pictures[pos]}
        />
        <div
          className="pictureContainer__arrow -left"
          onClick={() => movePos(-1)}
        />
        <div
          className="pictureContainer__arrow -right"
          onClick={() => movePos(1)}
        />
      </div>
      {renderRow("left")}
      {renderRow("right")}
      {renderRow("middle")}
    </div>
  );
};

export default pictureContainer;
