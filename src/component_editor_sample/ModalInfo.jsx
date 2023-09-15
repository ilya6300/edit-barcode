import React, { useState } from "react";

const ModalInfo = ({ children }) => {
  const [factorVisibleClass, setFactorVisibleClass] = useState(["hidden"]);

  const visibleInfoFactor = () => {
    setFactorVisibleClass(["box-input-info"]);
  };

  return (
    <label>
      <span className="info" onClick={visibleInfoFactor}>
        ?
      </span>
      <p
        className={factorVisibleClass}
        onClick={() => setFactorVisibleClass(["hidden"])}
      >
        {children}
        {/* Множитель печати - индивидуальная настройка принтера, служит для
        выравнивания печати по масштабированию. Множитель зависит от размера
        этикетки и количества символов в DataMatrix коде. У принтера{" "}
        {printer.model} значение по умолчанию должно быть утсановлено в - х
        {printer.factor} */}
      </p>
    </label>
  );
};

export default ModalInfo;
