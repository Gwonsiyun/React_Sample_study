import React, { useState } from "react";
import style from "./test.css";
import style2 from "./selectRGBcss.css";
function SelectRGB() {
  const [RGB, setRGB] = useState([0, 0, 0]);
  const rgbCodes = cRGB(15);
  function cRGB(num) {
    let arr = [];
    for (let i = 0; i <= 255; i += num) {
      arr.push(i);
    }
    return arr;
  }
  const MouseIn = ({
    target: {
      style: { backgroundColor: color }
    }
  }) => {
    let rgb = color
      .substring(4, color.length - 1)
      .replaceAll(" ", "")
      .split(",");
    setRGB(rgb);
  };
  return (
    <>
      <section>
        <div style={(style, style2)}>
          <div className={style2.colorInput}>
            RGB :{" "}
            <input
              id={"RGB"}
              type={"text"}
              value={`${RGB[0]},${RGB[1]},${RGB[2]}`}
              readOnly={true}
            />
            <br />
            {/*HEX : <input id={"B"} type={"text"} value={hexCode} />*/}
          </div>
          <div>
            {rgbCodes.map((G, Rindex) => (
              <div key={Rindex}>
                {rgbCodes.map((B, Gindex) => (
                  <div key={Rindex + Gindex}>
                    {rgbCodes.map((R, Bindex) => (
                      <div
                        key={Rindex + Gindex + Bindex}
                        className={"colors"}
                        style={{
                          backgroundColor: `rgb(${R},${G},${B})`
                        }}
                        onMouseOver={MouseIn}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default SelectRGB;
