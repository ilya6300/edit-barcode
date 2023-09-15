import React from "react";
import ItemPattern from "./ItemPattern";

const ListPattern = ({ collectionPatternPrinter, btn }) => {
  return (
    <div className="preview-component-list-rattern">
      {collectionPatternPrinter.map((pattern) => (
        <ItemPattern pattern={pattern} key={pattern.id} btn={btn}/>
      ))}
    </div>
  );
};

export default ListPattern;