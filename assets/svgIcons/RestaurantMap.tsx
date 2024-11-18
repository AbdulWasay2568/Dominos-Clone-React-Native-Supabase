import {View, Text} from 'react-native';
import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const RestaurantMap = () => {
  return (
    <Svg width="47" height="46" viewBox="0 0 47 46" fill="none">
      <Rect
        opacity="0.15"
        x="0.191406"
        y="0.196533"
        width="46.0778"
        height="45"
        rx="11.8868"
        fill="#5669FF"
      />
      <Rect
        x="7.46777"
        y="7.30151"
        width="31.5269"
        height="30.7895"
        rx="10.1887"
        fill="white"
      />
      <G clip-path="url(#clip0_5382_46567)">
        <Path
          d="M28.9902 21.4475C28.9902 25.8225 23.2304 29.5725 23.2304 29.5725C23.2304 29.5725 17.4707 25.8225 17.4707 21.4475C17.4707 19.9556 18.0775 18.5249 19.1577 17.47C20.2378 16.4151 21.7029 15.8225 23.2304 15.8225C24.758 15.8225 26.223 16.4151 27.3032 17.47C28.3833 18.5249 28.9902 19.9556 28.9902 21.4475Z"
          stroke="#A796E4"
          stroke-width="1.69811"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M23.2305 23.3219C24.2908 23.3219 25.1504 22.4825 25.1504 21.4469C25.1504 20.4114 24.2908 19.5719 23.2305 19.5719C22.1701 19.5719 21.3105 20.4114 21.3105 21.4469C21.3105 22.4825 22.1701 23.3219 23.2305 23.3219Z"
          stroke="#A796E4"
          stroke-width="1.69811"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5382_46567">
          <Rect
            width="15.3593"
            height="15"
            fill="white"
            transform="translate(15.5508 15.197)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default RestaurantMap;
