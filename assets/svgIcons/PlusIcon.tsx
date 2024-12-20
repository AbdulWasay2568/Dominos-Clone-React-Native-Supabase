import Svg, { Path } from 'react-native-svg';
import React from 'react';

const PlusIcon = ({ color = "#A796E4" }) => {
  return (
    <Svg width="12" height="13" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0Z"
        fill={color}
      />
    </Svg>
  );
};

export default PlusIcon;
