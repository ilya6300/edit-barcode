import React, { useState } from "react";
import bwipjs from "bwip-js";

const DMBarcodeGenSampleEditor = (props) => {
  try {
    let canvas = bwipjs.toCanvas("mycanvas", {
      bcid: "datamatrix", // Barcode type
      text: "0104603721020607215>(egukLfdK5r93zoJf",
    });
  } catch (e) {

  }

  return (
    <canvas
      style={{
        position: "absolute",
        width: props.dots * props.dmRowAndCol * props.mm + props.coefficientY + "px",
        marginLeft: props.dots * props.marginLabelXDM + "px",
        marginTop:
          props.dots * props.marginLabelYDM + props.coefficientY + "px",
      }}
      id="mycanvas"
    />
  );
};

export default DMBarcodeGenSampleEditor;
