import Svg, {G,Circle,Defs,Rect,ClipPath} from 'react-native-svg';
import React from 'react';

const Radio1 = () => {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <G clip-path="url(#clip0_1459_19511)">
        <Circle cx="6.00223" cy="6.00028" r="5.14286" fill="#CB77FF" />
        <Circle
          cx="6.00084"
          cy="5.99986"
          r="3.21429"
          fill="#CB77FF"
          stroke="white"
          stroke-width="0.428571"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1459_19511">
          <Rect width="12" height="12" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Radio1;
