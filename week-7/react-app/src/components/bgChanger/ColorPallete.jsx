import React from "react";
import { useRecoilState } from "recoil";
import { colorAtom } from "../../store/atoms/colorAtom";

const ColorPallete = () => {
  const [bgColor, setBgColor] = useRecoilState(colorAtom);
  const colors = ["red", "blue", "cyan"];

  const handleClick = (color) => {
    setBgColor(color);
  };
  return (
    <div>
      {colors.map((color, index) => {
        return (
          <button
            style={{ backgroundColor: color }}
            key={index}
            onClick={() => handleClick(color)}
          >
            {color}
          </button>
        );
      })}
    </div>
  );
};

export default ColorPallete;
