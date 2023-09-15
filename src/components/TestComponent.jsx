import React, { useEffect } from "react";

const TestComponent = () => {
  const str =
    "SIZE " +
    15 +
    "mm," +
    15 +
    "mm" +
    "\n" +
    "GAP 2mm, 0mm" +
    "\n" +
    "DIRECTION 1, 0" +
    "\n" +
    "REFERENCE " +
    12 +
    "," +
    10 +
    "\n" +
    "CLS" +
    "\n" +
    "DMATRIX " +
    15 +
    "," +
    5 +
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
    15 +
    "," +
    85 +
    "," +
    '"0",0,6,6,' +
    '"' +
    "{mandate}" +
    '"' +
    "\n" +
    "PRINT 1,1" +
    "\n";
  const base64 = btoa(str);
  const b64 =
    "eyJwcm9kdWN0cyI6IFt7Imd0aW4iOiAiMDQ2NjAyNTYwNjAwNjUiLCAicXVhbnRpdHkiOiAxLCAic2VyaWFsTnVtYmVyVHlwZSI6ICJPUEVSQVRPUiIsICJ0ZW1wbGF0ZUlkIjogMTYsICJjaXNUeXBlIjogIlVOSVQifV0sICJyZWxlYXNlTWV0aG9kVHlwZSI6ICJQUk9EVUNUSU9OIiwgImNyZWF0ZU1ldGhvZFR5cGUiOiAiU0VMRl9NQURFIn0=";
  const decode = atob(b64);
  useEffect(() => {
    console.log(base64, "base64");
  }, []);

  return <div></div>;
};

export default TestComponent;
