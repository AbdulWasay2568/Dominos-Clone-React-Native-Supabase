import Svg, {Path} from 'react-native-svg';
import React from 'react';

const FavoriteTabSvg = ({
  height,
  width,
  fill,
  stroke,
}: {
  height?: number | string;
  width?: number | string;
  fill?: any;
  stroke?: string;
}) => {
  return (
    <Svg
      width={width || '25'}
      height={height || '24'}
      viewBox="0 0 25 24"
      fill="none">
      <Path
        d="M16.94 3.09961C15.13 3.09961 13.51 3.97961 12.5 5.32961C11.49 3.97961 9.87 3.09961 8.06 3.09961C4.99 3.09961 2.5 5.59961 2.5 8.68961C2.5 9.87961 2.69 10.9796 3.02 11.9996C4.6 16.9996 9.47 19.9896 11.88 20.8096C12.22 20.9296 12.78 20.9296 13.12 20.8096C15.53 19.9896 20.4 16.9996 21.98 11.9996C22.31 10.9796 22.5 9.87961 22.5 8.68961C22.5 5.59961 20.01 3.09961 16.94 3.09961Z"
        fill={fill || 'none'}
        stroke={stroke || 'none'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default FavoriteTabSvg;
