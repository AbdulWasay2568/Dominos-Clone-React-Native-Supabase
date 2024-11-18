import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const ArrowLeft = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Rect width="32" height="32" rx="16" fill="none" />
      <Path
        d="M22.9999 16.5H8.99994M8.99994 16.5L15.9999 23.5M8.99994 16.5L15.9999 9.5"
        stroke="#222222"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowLeft;