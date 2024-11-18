import Svg, {Path, Rect} from 'react-native-svg';
import React from 'react';

const NoOfPeople = () => {
  return (
    <Svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      >
      <Rect opacity="0.12" width="48" height="48" rx="12" fill="#A796E4" />
      <Path
        d="M21.16 22.87C21.06 22.86 20.94 22.86 20.83 22.87C18.45 22.79 16.56 20.84 16.56 18.44C16.56 15.99 18.54 14 21 14C23.45 14 25.44 15.99 25.44 18.44C25.43 20.84 23.54 22.79 21.16 22.87Z"
        stroke="#977EF2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M28.41 16C30.35 16 31.91 17.57 31.91 19.5C31.91 21.39 30.41 22.93 28.54 23C28.46 22.99 28.37 22.99 28.28 23"
        stroke="#977EF2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.16 26.56C13.74 28.18 13.74 30.82 16.16 32.43C18.91 34.27 23.42 34.27 26.17 32.43C28.59 30.81 28.59 28.17 26.17 26.56C23.43 24.73 18.92 24.73 16.16 26.56Z"
        stroke="#977EF2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M30.34 32C31.06 31.85 31.74 31.56 32.3 31.13C33.86 29.96 33.86 28.03 32.3 26.86C31.75 26.44 31.08 26.16 30.37 26"
        stroke="#977EF2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default NoOfPeople;
