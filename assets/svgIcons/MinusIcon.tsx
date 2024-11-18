import Svg, { Rect } from 'react-native-svg';
import React from 'react';

const MinusIcon = ({ color = "#A796E4" }) => {
  return (
    <Svg width="28" height="24" viewBox="0 0 24 24" fill="none">
      <Rect x="6" y="11" width="13" height="2" rx="1" fill={color} />
    </Svg>
  );
};

export default MinusIcon;
