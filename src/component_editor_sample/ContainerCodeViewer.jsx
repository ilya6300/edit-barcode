import React, { useEffect } from "react";

const ContainerCodeViewer = ({
  printer,
  dots,
  dpi,
  widthLabel,
  heightLabel,
  referenceX,
  referenceY,
  marginLabelXDM,
  marginLabelYDM,
  factorPrinter,
  barcode,
  barcodeTextFlag,
  marginLabelXText,
  marginLabelYText,
  barcodeTextValue,
  collectLabelDMCenter,
  collectLabelDMTopAndTextBottom,
  collectLabelDMBottomAndTextTop,
  printerCode,
  setPrinterCode,
}) => {
  useEffect(() => {
    setPrinterCode(printerCode);
  }, [setPrinterCode, printerCode]);

  return (
    <div className="container-viewer">
      <h1 className="category-input-title">
        Код на языке принтера {printer.language}
        {printer !== "" ? (
          <>
            {" "}
            <span>({printer.model})</span>
          </>
        ) : (
          <></>
        )}
      </h1>
      <div className="viewer-code">
        <textarea value={printerCode} cols="50" rows="20">
          {/* {printerCode} */}
        </textarea>
        <ul>
          {" "}
          Авто-шаблон
          <li>
            DM без текста по центру{" "}
            <button onClick={collectLabelDMCenter}>Собрать</button>
          </li>
          <li>
            С текстом снизу{" "}
            <button onClick={collectLabelDMTopAndTextBottom}>Собрать</button>
          </li>
          <li>
            С текстом сверху{" "}
            <button onClick={collectLabelDMBottomAndTextTop}>Собрать</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContainerCodeViewer;
