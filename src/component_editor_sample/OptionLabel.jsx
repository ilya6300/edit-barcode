import React from "react";
import DPIController from "./DPIController";
import ItemInput from "./ItemInput";
import ItemDobleInput from "./ItemDobleInput";
import ModalInfo from "./ModalInfo";

const OptionLabel = ({
  printer,
  setDpi,
  dpi,
  dots,
  setDots,
  mm,
  radiusLabel,
  setRadiusLabel,
  widthLabel,
  setWidthLabel,
  heightLabel,
  setHeightLabel,
  factorPrinter,
  checkFactorPrinter,
  referenceX,
  referenceY,
  setReferenceX,
  setReferenceY,
  marginLeftRightLabel,
  setMarginLeftRightLabel,
}) => {
  return (
    <div className="container-category-input">
      <h2 className="category-input-title">Параметры этикетки и принтера</h2>
      <DPIController
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
      <ItemInput
        text="Отступ слева и справа в мм"
        value={marginLeftRightLabel}
        onChange={(e) => setMarginLeftRightLabel(e.target.value)}
      />
      <div className="factor-box">
        <ItemDobleInput
          title="REFERENCE"
          value_one={referenceX}
          onChange_one={(e) => setReferenceX(e.target.value)}
          text_one="По X"
          value_two={referenceY}
          onChange_two={(e) => setReferenceY(e.target.value)}
          text_two="По Y"
        />
        <ModalInfo>
          {" "}
          REFERENCE - общий отступ печати по 'X' и 'Y' координатам. Значение определяется в
          dpi.
        </ModalInfo>
      </div>
      <div className="factor-box">
        {" "}
        <ItemInput
          text="Множитель печати"
          value={factorPrinter}
          onChange={checkFactorPrinter}
        />
        <ModalInfo>
          {" "}
          Множитель печати - индивидуальная настройка принтера, служит для
          выравнивания печати по масштабированию. Множитель зависит от размера
          этикетки и количества символов в DataMatrix коде. У принтера{" "}
          {printer.model} значение по умолчанию должно быть утсановлено в - х
          {printer.factor} для этикетки размером {widthLabel} * {heightLabel} мм.
        </ModalInfo>
      </div>
    </div>
  );
};

export default OptionLabel;
