import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { colorAtom } from "../store/atoms/colorAtom";

export default function User() {
  const [bgColor] = useRecoilState(colorAtom);
  console.log(bgColor);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);
  return <div>User</div>;
}
