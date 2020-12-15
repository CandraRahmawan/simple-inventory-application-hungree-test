import React from 'react';
import { FixWrapper } from './style';

export default function FixSpinner() {
  return (
    <FixWrapper>
      <div className="loading component-loader">
        <div className="effect-1 effects" />
        <div className="effect-2 effects" />
        <div className="effect-3 effects" />
      </div>
    </FixWrapper>
  );
}
