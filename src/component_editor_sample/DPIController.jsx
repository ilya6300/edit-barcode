import React, { useEffect } from "react";
import RadioBtnDPI from "./UI/RadioBtnDPI";

const DPIController = ({ setDpi, dpi, dots, setDots, mm }) => {
  useEffect(() => {
    const startDPI = document.getElementsByName("dpi");
    startDPI.forEach((edpi) => {
      if (Number(edpi.value) === Number(dpi)) {
        edpi.checked = true;
      }
    });
  }, [dpi]);

  const readDPI = (e) => {
    setDpi(e.target.value);
    if (Number(e.target.value) === 200) {
      setDots(mm / 8);
    } else if (Number(e.target.value) === 300) {
      setDots(mm / 12);
    }
  };

  useEffect(() => {
    setDots(dots);
  }, [dots]);

  return (
    <div className="dpi-contorller-conteiner">
      <RadioBtnDPI name="dpi" onClick={readDPI} value={200} />
      <RadioBtnDPI name="dpi" onClick={readDPI} value={300} />
    </div>
  );
};

export default DPIController;
