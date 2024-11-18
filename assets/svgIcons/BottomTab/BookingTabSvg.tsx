import Svg, {Path} from 'react-native-svg';
import React from 'react';

const BookingTabSvg = ({
  height,
  width,
  fill,
  stroke1,
  stroke2,
  stroke3,
  stroke4,
}: {
  height?: number | string;
  width?: number | string;
  fill?: string;
  stroke1?: string;
  stroke2?: string;
  stroke3?: string;
  stroke4?: string;
}) => {
  return (
    <Svg
      width={width || '25'}
      height={height || '24'}
      viewBox="0 0 25 24"
      fill={fill || 'none'}>
      <Path
        d="M21.5 7V17C21.5 20 20 22 16.5 22H8.5C5 22 3.5 20 3.5 17V7C3.5 4 5 2 8.5 2H16.5C20 2 21.5 4 21.5 7Z"
        stroke={stroke1 || '#141414'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15 4.5V6.5C15 7.6 15.9 8.5 17 8.5H19"
        stroke={stroke2 || '#141414'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.5 13H12.5"
        stroke={stroke3 || '#141414'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.5 17H16.5"
        stroke={stroke4 || '#141414'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default BookingTabSvg;
