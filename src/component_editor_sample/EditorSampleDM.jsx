import React, { useEffect, useMemo, useRef, useState } from "react";
import ItemInput from "./ItemInput";
import DMBarcodeGenSampleEditor from "../component_editor_sample/DMBarcodeGenSampleEditor";
import printListCollection from "../print_list.json";
import ListPrintersModel from "./ListPrintersModel";
import DPIController from "./DPIController";
import ContainerCodeViewer from "./ContainerCodeViewer";
import ContainerCodeBlank from "./ContainerCodeBlank";
import OptionLabel from "./OptionLabel";
import OptionDM from "./OptionDM";
import ReadPattern from "./components_read_and_write_pattern/ReadPattern";
import PreviewLabel from "./PreviewLabel";

const EditorSampleDM = () => {
  // const printersCollection = JSON.parse(printListJson)

  const mm = 3.793627;
  const [dots, setDots] = useState("");
  const coefficientY = 1; // Кофициент выравнивания по Y кооррдинате, для DM
  // Скругление углов этикетки
  const [radiusLabel, setRadiusLabel] = useState(20);
  // Размеры этикетки
  const [widthLabel, setWidthLabel] = useState(15);
  const [heightLabel, setHeightLabel] = useState(15);
  // Отступ после этикетки
  const [marginLeftRightLabel, setMarginLeftRightLabel] = useState(2);
  // DM
  const [marginLabelXDM, setMarginLabelXDM] = useState(15);
  const [marginLabelYDM, setMarginLabelYDM] = useState(15);
  const [dmRowAndCol, setDmRowAndCol] = useState(23);
  // const []
  // Отступ печати text
  const [marginLabelXText, setMarginLabelXText] = useState(10);
  const [marginLabelYText, setMarginLabelYText] = useState(5);
  // Множитель принтера
  const [factorPrinter, setFacorPrinter] = useState("string");
  // REFERENCE в точках
  const [referenceX, setReferenceX] = useState(12);
  const [referenceY, setReferenceY] = useState(12);
  // Радио кнопки DPI
  const [dpi, setDpi] = useState(200);
  // Флаги-переменные
  const [barcodeTextFlag, setBarcodeTextFlag] = useState(false);
  const [barcodeTextValue, setBarcodeTextValue] = useState("{gtin}");
  const [barcodeText, setBarcodeText] = useState("");
  const barcode = "{barcode}";
  const [addBtnStyle, setAddBtnSryle] = useState("add-text-check");
  const [printer, setPrinter] = useState("");

  // Код принтера
  const [printerCode, setPrinterCode] = useState(
    ""
    //   "SIZE" +
    //     widthLabel +
    //     "mm," +
    //     heightLabel +
    //     "mm" +
    //     "\n" +
    //     "GAP 2mm, 0mm" +
    //     "\n" +
    //     "DIRECTION 1, 0" +
    //     "\n" +
    //     "REFERENCE" +
    //     referenceX +
    //     referenceY +
    //     "\n" +
    //     "CLS" +
    //     "\n" +
    //     "DMATRIX " +
    //     marginLabelXDM +
    //     "," +
    //     marginLabelYDM +
    //     ",400,400,c126,x" +
    //     factorPrinter +
    //     "," +
    //     26 +
    //     "," +
    //     26 +
    //     "," +
    //     '"{ barcode }"' +
    //     "\n" +
    //     "TEXT" +
    //     marginLabelXText +
    //     marginLabelYText +
    //     '"0",0,6,6,' +
    //     '"' +
    //     { barcodeTextValue } +
    //     '"' +
    //     "\n" +
    //     "PRINT 1,1" +
    //     "\n"
  );
  useEffect(() => {
    setPrinterCode(
      "SIZE " +
        widthLabel +
        "mm," +
        heightLabel +
        "mm" +
        "\n" +
        "GAP 2mm, 0mm" +
        "\n" +
        "DIRECTION 1, 0" +
        "\n" +
        "REFERENCE " +
        referenceX +
        "," +
        referenceY +
        "\n" +
        "CLS" +
        "\n" +
        "DMATRIX " +
        marginLabelXDM +
        "," +
        marginLabelYDM +
        ",400,400,c126,x" +
        4 +
        "," +
        26 +
        "," +
        26 +
        "," +
        '"{barcode}"' +
        "\n" +
        "TEXT " +
        marginLabelXText +
        marginLabelYText +
        '"0",0,6,6,' +
        '"' +
        barcodeTextValue +
        '"' +
        "\n" +
        "PRINT 1,1" +
        "\n"
    );
  }, [
    barcodeTextValue,
    widthLabel,
    heightLabel,
    referenceX,
    referenceY,
    marginLabelXDM,
    marginLabelYDM,
    factorPrinter,
    marginLabelXText,
    marginLabelYText,
  ]);
  // useEffect(() => {
  //   setPrinterCode(printerCode)
  // }, [setPrinterCode, printerCode])
  // Показать/скрыть текст
  const hendlerCHBText = () => {
    setBarcodeTextFlag(!barcodeTextFlag);
    if (!barcodeTextFlag) {
      setAddBtnSryle("add-text-check-active");
      setPrinterCode(
        "SIZE " +
          widthLabel +
          "mm," +
          heightLabel +
          "mm" +
          "\n" +
          "GAP 2mm, 0mm" +
          "\n" +
          "DIRECTION 1, 0" +
          "\n" +
          "REFERENCE " +
          referenceX + "," +
          referenceY +
          "\n" +
          "CLS" +
          "\n" +
          "DMATRIX " +
          marginLabelXDM +
          "," +
          marginLabelYDM +
          ",400,400,c126,x" +
          factorPrinter +
          "," +
          26 +
          "," +
          26 +
          "," +
          '"{barcode}"' +
          "\n" +
          "TEXT " +
          marginLabelXText + "," +
          marginLabelYText + "," +
          '"0",0,6,6,' +
          '"' +
          barcodeTextValue +
          '"' +
          "\n" +
          "PRINT 1,1" +
          "\n"
      );
    } else {
      setAddBtnSryle("add-text-check");
      setPrinterCode(
        "SIZE " +
          widthLabel +
          "mm," +
          heightLabel +
          "mm" +
          "\n" +
          "GAP 2mm, 0mm" +
          "\n" +
          "DIRECTION 1, 0" +
          "\n" +
          "REFERENCE " +
          referenceX + "," +
          referenceY +
          "\n" +
          "CLS" +
          "\n" +
          "DMATRIX " +
          marginLabelXDM +
          "," +
          marginLabelYDM +
          ",400,400,c126,x" +
          factorPrinter +
          "," +
          26 +
          "," +
          26 +
          "," +
          '"{barcode}"' +
          "\n" +
          "PRINT 1,1" +
          "\n"
      );
    }
  };
  // Фокус
  // const visibleInfoFactor = () => {
  //   setFactorVisibleClass(["box-input-info"]);
  // };
  // Выбор типа текста
  const hendlerBarcodeTextValue = (e) => {
    setBarcodeTextValue(e.target.value);
  };

  useEffect(() => {
    setBarcodeTextValue(barcodeTextValue);
    // console.log(printListCollection)
    if (barcodeTextValue === "{gtin}") {
      setBarcodeText("03665585002190");
    } else if (barcodeTextValue === "{mandate}") {
      setBarcodeText("17.06.2023");
    } else if (barcodeTextValue === "{lifedate}") {
      setBarcodeText("17.06.2024");
    }
  }, [barcodeTextValue]);
  // Авто сборы шаблонов
  const collectLabelDMCenter = () => {
    setAddBtnSryle("add-text-check");
    setBarcodeTextFlag(false);
    setMarginLabelXDM(15);
    setMarginLabelYDM(15);
    setMarginLabelXText(10);
    setMarginLabelYText(95);
    setReferenceX(12);
    setReferenceY(12);
  };
  const collectLabelDMTopAndTextBottom = () => {
    setAddBtnSryle("add-text-check-active");
    setBarcodeTextFlag(true);
    setMarginLabelXDM(15);
    setMarginLabelYDM(5);
    setMarginLabelXText(10);
    setMarginLabelYText(95);
    setReferenceX(12);
    setReferenceY(12);
  };
  const collectLabelDMBottomAndTextTop = () => {
    setAddBtnSryle("add-text-check-active");
    setBarcodeTextFlag(true);
    setMarginLabelXDM(15);
    setMarginLabelYDM(22);
    setMarginLabelXText(10);
    setMarginLabelYText(5);
    setReferenceX(12);
    setReferenceY(12);
  };

  const getPrinter = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "Выберите, модель принетра") {
      // setFacorPrinter(e.target.value.factor)
      return setPrinter(
        printListCollection.printers.find((p) => p.model === e.target.value)
      );
    }
  };

  //
  const checkFactorPrinter = (e) => {
    setFacorPrinter(e.target.value);
  };

  // Получение параметров принтера
  const getOprtionsPrinter = useMemo(() => {
    setFacorPrinter(printer.factor);
    setDpi(printer.dpi);
    if (Number(printer.dpi) === 200) {
      setDots(() => mm / 8);
    } else if (Number(printer.dpi) === 300) {
      setDots(() => mm / 12);
    }
  }, [printer]);

  // useEffect(() => {
  //   setPrinter(printer)
  // }, [printer])

  return (
    <div className="main-editor">
      {/* Компонент считывающий шаблон */}
      {/* <ReadPattern mm={mm} /> */}
      {/* Контейнер этикетки */}
      <div className="container-sample">
        <h1 className="title-block">Визуальный вид этикетки</h1>
        <PreviewLabel
          mm={mm}
          marginLeftRightLabel={marginLeftRightLabel}
          widthLabel={widthLabel}
          heightLabel={heightLabel}
          radiusLabel={radiusLabel}
          referenceX={referenceX}
          dots={dots}
          referenceY={referenceY}
          marginLabelYDM={marginLabelYDM}
          marginLabelXDM={marginLabelXDM}
          coefficientY={coefficientY}
          dmRowAndCol={dmRowAndCol}
          barcodeTextFlag={barcodeTextFlag}
          marginLabelXText={marginLabelXText}
          marginLabelYText={marginLabelYText}
          barcodeText={barcodeText}
        />
        {/* TSPL вывод */}
        {printer.language === "EZPL" ? (
          <ContainerCodeBlank
            printer_language={printer.language}
            printer_model={printer.model}
            printer={printer}
            text="В разработке"
          />
        ) : (
          <></>
        )}
        {printer.language === "TSPL" ? (
          <ContainerCodeViewer
            printer={printer}
            dots={dots}
            dpi={dpi}
            widthLabel={widthLabel}
            heightLabel={heightLabel}
            referenceX={referenceX}
            referenceY={referenceY}
            marginLabelXDM={marginLabelXDM}
            marginLabelYDM={marginLabelYDM}
            factorPrinter={factorPrinter}
            barcode={barcode}
            barcodeTextFlag={barcodeTextFlag}
            marginLabelXText={marginLabelXText}
            marginLabelYText={marginLabelYText}
            barcodeTextValue={barcodeTextValue}
            collectLabelDMCenter={collectLabelDMCenter}
            collectLabelDMTopAndTextBottom={collectLabelDMTopAndTextBottom}
            collectLabelDMBottomAndTextTop={collectLabelDMBottomAndTextTop}
            printerCode={printerCode}
            setPrinterCode={setPrinterCode}
          />
        ) : (
          <></>
        )}
        {printer === "" ? (
          <ContainerCodeBlank text="Выберите принтер, на панеле 'Настройки шаблона принтера'" />
        ) : (
          <></>
        )}
      </div>

      {/* Меню параметров и вывод кода */}
      <div className="container-editor">
        <h1 className="title-block">
          Настройки шаблона принтера {printer.model}
        </h1>
        <div className="select-printer-container">
          <ListPrintersModel
            printListCollection={printListCollection}
            onChange={getPrinter}
          />
        </div>

        <div className="container-editor-check_bar">
          <label>
            <input
              style={{ visibility: "hidden" }}
              type="checkbox"
              checked={barcodeTextFlag}
              onChange={hendlerCHBText}
            />
            Добавить текстовую информацию (GTIN, дату и др.)printer
            <span className={addBtnStyle}>Add</span>
          </label>
          {barcodeTextFlag ? (
            <div>
              <select
                value={barcodeTextValue}
                onChange={hendlerBarcodeTextValue}
              >
                <option value="{gtin}">gtin</option>
                <option value="{mandate}">mandate</option>
                <option value="{lifedate}">lifedate</option>
              </select>
            </div>
          ) : (
            <></>
          )}
        </div>

        {/* Общие настройки этикетки */}
        <OptionLabel
          printer={printer}
          setDpi={setDpi}
          dpi={dpi}
          dots={dots}
          setDots={setDots}
          mm={mm}
          radiusLabel={radiusLabel}
          setRadiusLabel={setRadiusLabel}
          widthLabel={widthLabel}
          setWidthLabel={setWidthLabel}
          heightLabel={heightLabel}
          setHeightLabel={setHeightLabel}
          factorPrinter={factorPrinter}
          checkFactorPrinter={checkFactorPrinter}
          referenceX={referenceX}
          referenceY={referenceY}
          setReferenceX={setReferenceX}
          setReferenceY={setReferenceY}
          marginLeftRightLabel={marginLeftRightLabel}
          setMarginLeftRightLabel={setMarginLeftRightLabel}
        />
        {/* <div className="container-category-input">
          <h2 className="category-input-title">
            Параметры этикетки и принтера
          </h2>
          <DPIController
            printer={printer}
            setDpi={setDpi}
            dpi={dpi}
            dots={dots}
            setDots={setDots}
            mm={mm}
          />
          <ItemInput
            text="Скругление углов этикетки в %"
            value={radiusLabel}
            onChange={(e) => setRadiusLabel(e.target.value)}
          />
          <ItemInput
            text=" Ширина этикетки в мм"
            value={widthLabel}
            onChange={(e) => setWidthLabel(e.target.value)}
          />
          <ItemInput
            text="Высота этикетки в мм"
            value={heightLabel}
            onChange={(e) => setHeightLabel(e.target.value)}
          />
          <div className="factor-box">
            {" "}
            <ItemInput
              text="Множитель печати"
              value={factorPrinter}
              onChange={checkFactorPrinter}
            />
            <span className="info" onClick={visibleInfoFactor}>
              ?
            </span>
            <p
              className={factorVisibleClass}
              onClick={() => setFactorVisibleClass(["hidden"])}
            >
              Множитель печати - индивидуальная настройка принтера, служит для
              выравнивания печати по масштабированию. Множитель зависит от
              размера этикетки и количества символов в DataMatrix коде. У
              принтера {printer.model} значение по умолчанию должно быть
              утсановлено в - {printer.factor}
            </p>
          </div>
        </div> */}
        <div className="container-category">
          {/* Размеры DataMatrix кода */}
          <OptionDM
            marginLabelXDM={marginLabelXDM}
            setMarginLabelXDM={setMarginLabelXDM}
            marginLabelYDM={marginLabelYDM}
            setMarginLabelYDM={setMarginLabelYDM}
            setDmRowAndCol={setDmRowAndCol}
            dmRowAndCol={dmRowAndCol}
          />
          {/* <div className="container-category-input">
            <h2 className="category-input-title">Параметры DataMatrix-кода</h2>
            <ItemInput
              text="Отсуп по оси X в 0,1 мм"
              value={marginLabelXDM}
              onChange={(e) => setMarginLabelXDM(e.target.value)}
            />
            <ItemInput
              text="Отсуп по оси Y в 0,1 мм"
              value={marginLabelYDM}
              onChange={(e) => setMarginLabelYDM(e.target.value)}
            />
          </div> */}
          {/* Размеры текста */}
          {barcodeTextFlag ? (
            <div className="container-category-input">
              <h2 className="category-input-title">Параметры текста</h2>
              <ItemInput
                text="Отсуп по оси X в 0,1 мм"
                value={marginLabelXText}
                onChange={(e) => setMarginLabelXText(e.target.value)}
              />
              <ItemInput
                text="Отсуп по оси Y в 0,1 мм"
                value={marginLabelYText}
                onChange={(e) => setMarginLabelYText(e.target.value)}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorSampleDM;
