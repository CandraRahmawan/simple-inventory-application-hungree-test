import React from "react";
import { Wrapper } from "./style";

export default function Spinner() {
  return (
    <Wrapper>
      <div className="loading component-loader">
        <div className="effect-1 effects"></div>
        <div className="effect-2 effects"></div>
        <div className="effect-3 effects"></div>
      </div>
    </Wrapper>
  );
}
