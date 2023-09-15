import React from 'react'
import DMBarcodeGenSampleEditor from "../component_editor_sample/DMBarcodeGenSampleEditor";

const PreviewLabel = ({mm, marginLeftRightLabel, widthLabel, heightLabel,radiusLabel , referenceX, dots, referenceY, marginLabelYDM, marginLabelXDM, coefficientY, dmRowAndCol, barcodeTextFlag, marginLabelXText, marginLabelYText, barcodeText}) => {
  return (
    <div className="container-ribbon-box">
          {/* Лента */}
          <div
            className="container-ribbon"
            style={{
              width: mm * marginLeftRightLabel * 2 + mm * widthLabel + "px",
              height: mm * 2 + mm * heightLabel + "px",
            }}
          >
            {/* Этикетка (mm * mm) */}
            <div
              className="size-label"
              style={{
                width: mm * widthLabel + "px",
                height: mm * heightLabel + "px",
                borderRadius: radiusLabel + "%",
              }}
            >
              {/* Координаты печати */}
              <div
                className="coord-print"
                style={{
                  width:
                    mm * marginLeftRightLabel +
                    widthLabel * mm -
                    referenceX * dots +
                    "px",
                  height:
                    mm * marginLeftRightLabel +
                    heightLabel * mm -
                    referenceY * dots +
                    "px",
                }}
              >
                {/* DataMatrix */}
                <DMBarcodeGenSampleEditor
                  marginLeftRightLabel={marginLeftRightLabel}
                  mm={mm}
                  dots={dots}
                  marginLabelYDM={marginLabelYDM}
                  marginLabelXDM={marginLabelXDM}
                  referenceX={referenceX}
                  referenceY={referenceY}
                  coefficientY={coefficientY}
                  dmRowAndCol={dmRowAndCol}
                />
                {barcodeTextFlag ? (
                  <span
                    className="barcode-text"
                    style={{
                      // marginLeft: (mm * marginLabelXText) / 10 + "px",
                      // marginTop: (mm * marginLabelYText) / 8 + "px",
                      marginLeft: dots * marginLabelXText + "px",
                      marginTop: dots * marginLabelYText + "px",
                    }}
                  >
                    {barcodeText}
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
  )
}

export default PreviewLabel