import React, { useEffect, useState } from "react";
import style from "./selectRGBcss.css";
function SearchRGB() {
  const [R, setR] = useState(0);
  const [G, setG] = useState(0);
  const [B, setB] = useState(0);
  const [hexCode, setHexCode] = useState("");
  const selectColor = ({ target: { value, id } }) => {
    if (value.length > 3) return;
    if (value > 255) value = 255;
    switch (id) {
      case "R":
        setR(value);
        break;
      case "G":
        setG(value);
        break;
      case "B":
        setB(value);
        break;
      default:
        alert("id가 확인되지 않습니다");
    }
  };
  const setColor = () => {
    setHexCode(ConvertRGBtoHex(R, G, B));
    const colorBox = document.getElementById("colorBox");
    colorBox.innerText = `RGB : ${R},${G},${B}`;
    colorBox.style.backgroundColor = `rgb(${R},${G},${B})`;
    console.log("setColor");
    return;
  };
  useEffect(setColor, [R, G, B]);

  function ColorToHex(color) {
    let hexadecimal = Number(color).toString(16).toUpperCase();
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
  }

  function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
  }
  return (
    <>
      <section>
        <div>
          <div id={"colorBox"} className={"colorBox"} style={style}></div>
          <div className={style.colorInput}>
            R :{" "}
            <input onChange={selectColor} id={"R"} type={"number"} value={R} />
            <br />G :{" "}
            <input onChange={selectColor} id={"G"} type={"number"} value={G} />
            <br />B :{" "}
            <input onChange={selectColor} id={"B"} type={"number"} value={B} />
            <br />
            HEX :{" "}
            <input
              onChange={selectColor}
              id={"B"}
              type={"text"}
              value={hexCode}
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default SearchRGB;
