import React from "react";

const RadioBtnDPI = (props) => {
  return (
    <label className="radio-btn-dpi-label">
      <span style={{ marginBottom: "5px" }}>{props.value} dpi</span>
      <input
        {...props}
        type="radio"
        name={props.name}
        onClick={props.onClick}
        value={props.value}
      />
    </label>
  );
};

export default RadioBtnDPI;
