import React from "react";

const typerContainer = props => {
  const { className } = props;
  return props.open ? <div className={className}>{props.children}</div> : null;
};

export default typerContainer;
