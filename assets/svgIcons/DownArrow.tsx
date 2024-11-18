import Svg, {Path, Rect} from 'react-native-svg';
import React from 'react';

const DownArrow = ({
  width,
  height,
}: {
  height: number | string;
  width: number | string;
}) => {
  return (
    <Svg
      width={width || '24'}
      height={height || '20'}
      viewBox="0 0 10 10"
      fill="none">
      <Path
        d="M2 4L4.64645 6.64645C4.84171 6.84171 5.15829 6.84171 5.35355 6.64645L8 4"
        stroke="#606470"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default DownArrow;
