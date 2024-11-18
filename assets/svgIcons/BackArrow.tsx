import Svg, {Path} from 'react-native-svg';
import React from 'react';

const BackArrow = () => {
  return (
    <Svg
      width="35"
      height="19"
      viewBox="0 0 18 17"
      fill="none">
      <Path
        d="M16 8.5H2M2 8.5L9 15.5M2 8.5L9 1.5"
        stroke="#222222"
       strokeWidth="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default BackArrow;
