import React from "react";
import style from "./test.css";
function SelectRGB() {
  const rgbCodes = cRGB(51);
  function cRGB(num) {
    let arr = [];
    for (let i = 0; i <= 255; i += num) {
      arr.push(i);
    }
    return arr;
  }

  return (
    <>
      <div style={style}>
        {rgbCodes.map((R, Rindex) =>
          rgbCodes.map((G, Gindex) =>
            rgbCodes.map((B, Bindex) => (
              <div
                key={Rindex + Gindex + Bindex}
                className={"colors"}
                style={{
                  backgroundColor: `rgb(${R},${G},${B})`
                }}
              ></div>
            ))
          )
        )}
      </div>
    </>
  );
}
export default SelectRGB;
