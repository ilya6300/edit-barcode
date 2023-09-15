import React from 'react'
import ItemInput from "./ItemInput";

const OptionDM = ({marginLabelXDM, setMarginLabelXDM, marginLabelYDM, setMarginLabelYDM, dmRowAndCol, setDmRowAndCol}) => {
  return (
    <div className="container-category-input">
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
    <ItemInput
      text="Ширина/Высота кода DataMatrix"
      value={dmRowAndCol}
      onChange={(e) => setDmRowAndCol(e.target.value)}
    />
  </div>
  )
}

export default OptionDM