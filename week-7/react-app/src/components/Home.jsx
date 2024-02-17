import React, { useEffect, useState } from "react";
import ColorPallete from "./bgChanger/ColorPallete";
import { useRecoilState } from "recoil";
import { colorAtom } from "../store/atoms/colorAtom";

const Home = () => {
  const [bgColor] = useRecoilState(colorAtom);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <>
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {/* Your other components or content here */}
        <ColorPallete />
      </div>
    </>
  );
};

export default Home;
