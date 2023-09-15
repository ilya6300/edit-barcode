import React, { useState } from "react";
import bwipjs from "bwip-js";

const DMBarcodeGen = () => {
  try {
    // The return value is the canvas element
    let canvas = bwipjs.toCanvas("mycanvas", {
      bcid: "datamatrix", // Barcode type
      text: "0104603721020607215>(egukLfdK5r93zoJf", // Text to encode
      scale: 5, // 3x scaling factor
      height: 10,
      width: 10, // Bar height, in millimeters
      includetext: true, // Show human-readable text
      textxalign: "center", // Always good to set this
    });
  } catch (e) {
    // `e` may be a string or Error object
  }

  const [barcodeValue, setBarcodeValue] = useState();
  const [barcode, setBarcode] = useState();
  //   const bitgener = require('bitgener');
  const generationBarcode = () => {
    // console.log(bitgener)
  };
  return (
    <div>
      <input
        value={barcodeValue}
        onChange={(e) => setBarcodeValue(e.target.value)}
      />
      <button onClick={generationBarcode}>Сгенерировать</button>
      <div>
        <canvas id="mycanvas"></canvas>
      </div>
      {/* <button onClick={() => console.log('gs' + Symbol(''))}>gs</button> */}
    </div>
  );
};

export default DMBarcodeGen;
