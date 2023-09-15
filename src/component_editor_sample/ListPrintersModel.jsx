import React from "react";
import ItemPrintModel from "./ItemPrintModel";

const ListPrintersModel = ({ printListCollection, onChange,  }) => {
  return (
    <select 
    className="select-printer"
    onChange={onChange}
    >
      <option>Выберите, модель принетра</option>
      {printListCollection.printers.map((prtr) => (
        <ItemPrintModel prtr={prtr} key={prtr.model} />
      ))}
    </select>
  );
};

export default ListPrintersModel;
