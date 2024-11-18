import Svg, {Path} from 'react-native-svg';
import React from 'react';

type Props={
    fillColor?:string;
}

const CheckMark:React.FC<Props>= ({fillColor}) => {
  return (
    <Svg
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={fillColor || '#5f6368'}>
      <Path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
    </Svg>
  );
};

export default CheckMark;
