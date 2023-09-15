import React, { useState } from "react";
// import BarcodeR from "react-barcode";


const BarcodeGen = () => {
  const [barcodeValue, setBarcodeValue] = useState();
  const [barcode, setBarcode] = useState();
  const generationBarcode = () => {
    setBarcode(barcodeValue);
  };

  return (
    <div>
      <input
        value={barcodeValue}
        onChange={(e) => setBarcodeValue(e.target.value)}
      />
      <button onClick={generationBarcode}>Сгенерировать</button>
      <div>
        {/* <BarcodeR type='text' value={barcode}/> */}
      </div>
    </div>
  );
};

export default BarcodeGen;
