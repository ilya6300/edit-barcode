import React from "react";

const ItemPattern = (props) => {
  const codePattern = props.pattern.code;
  return <div className="item-pattern" onClick={() => props.btn(props.pattern)}>
    <span>{props.pattern.name}</span>
  </div>;
};

export default ItemPattern;
