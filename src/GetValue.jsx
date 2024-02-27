import React from "react";
import { charAtom } from "./CharCount";
import { useRecoilValue } from "recoil";

function GetValue() {
  const text = useRecoilValue(charAtom);

  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
}

export default GetValue;
