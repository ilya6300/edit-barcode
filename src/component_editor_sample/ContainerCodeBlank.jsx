import React from 'react'

const ContainerCodeBlank = (props) => {



  return (
    <div className="container-viewer">
    <h1 className="category-input-title">
      Код на языке принтера {props.printer_language}
      {props.printer !== "" ? (
        <>
          {" "}
          <span>({props.printer_model})</span>
        </>
      ) : (
        <></>
      )}
    </h1>
    <div className="viewer-code">
      <h1
        style={{
          width: "100%",
        }}
        className="title-block"
      >
        {props.text}
      </h1>
    </div>
  </div>
  )
}

export default ContainerCodeBlank