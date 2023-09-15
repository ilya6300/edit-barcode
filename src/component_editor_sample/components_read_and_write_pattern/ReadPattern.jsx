import React, { useEffect, useState } from "react";
import ListPattern from "./ListPattern";
import PreviewLabel from "../PreviewLabel";
import DPIController from "../DPIController";
import RadioBtnDPI from "../UI/RadioBtnDPI";

const ReadPattern = ({ mm }) => {
  const [previewmarginLeftRightLabel, setpreviewmarginLeftRightLabel] =
    useState(2);
  const [previewWidthLabel, setPreviewWidthLabel] = useState(15);
  const [previewHeightLabel, setPreviewHeightLabel] = useState(15);
  const [previewRadiusLabel, setPreviewRadiusLabel] = useState(20);
  const [previewReferenceX, setPreviewReferenceX] = useState(12);
  const [previewReferenceY, setPreviewReferenceY] = useState(12);
  const [previewMarginLabelYDM, setPreviewMarginLabelYDM] = useState(15);
  const [previewMarginLabelXDM, setPreviewMarginLabelXDM] = useState(15);
  const [coefficientY, setCoefficientY] = useState(1);
  const [previewDmRowAndCol, setPreviewDmRowAndCol] = useState(23);
  const [previewBarcodeTextFlag, setPreviewBarcodeTextFlag] = useState(false);
  const [previewMarginLabelXText, setPreviewMarginLabelXText] = useState(10);
  const [previewMarginLabelYText, setPreviewMarginLabelYText] = useState(10);
  const [previewBarcodeText, setPreviewBarcodeText] = useState("");
  const [previewDots, setPreviewDots] = useState("");
  const [previewDpi, setPreviewDpi] = useState(200);

  const collectionPatternPrinter = [
    {
      id: 1,
      code: "U0laRSAxNW1tLDE1bW0KR0FQIDJtbSwgMG1tCkRJUkVDVElPTiAxLCAwClJFRkVSRU5DRSAxMiwxMApDTFMKRE1BVFJJWCAxOCwyMiw0MDAsNDAwLGMxMjYseDQsMjYsMjYsIntiYXJjb2RlfSIKVEVYVCAxNSwzNSwiMCIsMCw2LDYsInttYW5kYXRlfSIKUFJJTlQgMSwxCg==",
      name: "DM1",
    },
    {
      id: 2,
      code: "U0laRSAxNW1tLDE1bW0KR0FQIDJtbSwgMG1tCkRJUkVDVElPTiAxLCAwClJFRkVSRU5DRSAxMiwxMApDTFMKRE1BVFJJWCAxNSwxMCw0MDAsNDAwLGMxMjYseDQsMjYsMjYsIntiYXJjb2RlfSIKUFJJTlQgMSwxCg==",
      name: "DM2",
    },
    {
      id: 3,
      code: "U0laRSAxNW1tLDE1bW0KR0FQIDJtbSwgMG1tCkRJUkVDVElPTiAxLCAwClJFRkVSRU5DRSAxMiwxMApDTFMKRE1BVFJJWCAxNSw1LDQwMCw0MDAsYzEyNix4NCwyNiwyNiwie2JhcmNvZGV9IgpURVhUIDE1LDg1LCIwIiwwLDYsNiwie21hbmRhdGV9IgpQUklOVCAxLDEK",
      name: "DM3",
    },
  ];

  // Переменная принимающая шаблон в формате b64
  const readPatternItem = (pattern) => {
    const patternB64 = collectionPatternPrinter.find(
      (p) => p.id === pattern.id
    );
    // Декодируем из base64
    const decodeB64 = atob(patternB64.code);
    console.log(decodeB64);

    // Вычисления по регулярным вырожениям
    //  SIZE - X
    const regWidthLabelXUpdate = String(decodeB64.match(/SIZE \d{1,3}/u));
    setPreviewWidthLabel(regWidthLabelXUpdate.replace(/[^+\d]/g, ""));
    // SIZE Y
    const regWidthLabelYUpdate = String(
      decodeB64.match(/SIZE \d{1,3}mm,\s{0,1}\d{1,3}/u)
    );
    setPreviewHeightLabel(String(regWidthLabelYUpdate.match(/\d{1,3}$/u)));
    // GAP X
    const regMarginLeftRightLabel = String(decodeB64.match(/GAP \d{1,3}/u));
    setpreviewmarginLeftRightLabel(
      regMarginLeftRightLabel.replace(/[^+\d]/g, "")
    );
    // Reference X
    const regPpreviewReferenceX = String(decodeB64.match(/REFERENCE \d{1,3}/u));
    setPreviewReferenceX(regPpreviewReferenceX.replace(/[^+\d]/g, ""));
    // Reference Y
    const regPpreviewReferenceY = String(decodeB64.match(/REFERENCE \d{1,3}/u));
    setPreviewReferenceY(regPpreviewReferenceY.match(/\d{1,3}$/u));
    // DM X
    const regPreviewMarginLabelXDM = String(
      decodeB64.match(/DMATRIX \d{1,3}/u)
    );
    setPreviewMarginLabelXDM(regPreviewMarginLabelXDM.replace(/[^+\d]/g, ""));
    // DM Y
    const regPreviewMarginLabelYDM = String(
      decodeB64.match(/DMATRIX \d{1,3}[,]\d{1,3}/u)
    );
    setPreviewMarginLabelYDM(regPreviewMarginLabelYDM.match(/\d{1,3}$/u));
    // Текст флаг 
    if (decodeB64.match(/TEXT /u)) {
      setPreviewBarcodeTextFlag(true)
      const regPreviewBarcodeText = String(
        decodeB64.match(/TEXT[\s\S]*,["']\{\w*\}["']/u)
      );
      setPreviewBarcodeText(regPreviewBarcodeText.match(/\{\w*\}/u));
      console.log(previewBarcodeText)
    } else {
      setPreviewBarcodeTextFlag(false)
    }
  };

  // Радио-переключатель
  const readDPI = (e) => {
    setPreviewDpi(e.target.value);
    if (Number(e.target.value) === 200) {
      setPreviewDots(mm / 8);
    } else if (Number(e.target.value) === 300) {
      setPreviewDots(mm / 12);
    }
  };

  return (
    <div className="preview-component-container">
      <h1 className="preview-component-title">Просмотреть шаблоны</h1>
      <div className="preview-container-flex">
        <ListPattern
          collectionPatternPrinter={collectionPatternPrinter}
          btn={readPatternItem}
        />
        <div>
          <div className="dpi-contorller-conteiner">
            <RadioBtnDPI name="dpi" onClick={readDPI} value={200} />
            <RadioBtnDPI name="dpi" onClick={readDPI} value={300} />
          </div>
          {/* <DPIController
            setDpi={setPreviewDpi}
            dpi={previewDpi}
            dots={previewDots}
            setDots={setPreviewDots}
            mm={mm}
          /> */}
          <PreviewLabel
            mm={mm}
            marginLeftRightLabel={previewmarginLeftRightLabel}
            widthLabel={previewWidthLabel}
            heightLabel={previewHeightLabel}
            radiusLabel={previewRadiusLabel}
            referenceX={previewReferenceX}
            dots={previewDots}
            referenceY={previewReferenceY}
            marginLabelYDM={previewMarginLabelYDM}
            marginLabelXDM={previewMarginLabelXDM}
            coefficientY={coefficientY}
            dmRowAndCol={previewDmRowAndCol}
            barcodeTextFlag={previewBarcodeTextFlag}
            marginLabelXText={previewMarginLabelXText}
            marginLabelYText={previewMarginLabelYText}
            barcodeText={previewBarcodeText}
          />
        </div>
      </div>
    </div>
  );
};

export default ReadPattern;
