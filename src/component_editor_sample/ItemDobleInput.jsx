import React from "react";

const ItemDobleInput = (props) => {
  return (
    <div className="label-css">
      {props.title}
      <div style={{ display: "flex" }}>
        <label>
          <input
            style={{ width: "50px" }}
            type="text"
            // placeholder="Отсуп по оси Y"
            value={props.value_one}
            onChange={props.onChange_one}
          /><span>{props.text_one}</span>
        </label>
        <label>
          <input
            style={{ width: "50px" }}
            type="text"
            // placeholder="Отсуп по оси Y"
            value={props.value_two}
            onChange={props.onChange_two}
          /><span>{props.text_two}</span>
        </label>
      </div>
    </div>
  );
};

export default ItemDobleInput;
