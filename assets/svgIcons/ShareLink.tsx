import Svg, {Circle, Path, Rect} from 'react-native-svg';
import React from 'react';

const CrossSvg = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
    <Rect width="20" height="20" rx="10" fill="white"/>
    <Path d="M12.5 5.5L7.02141 9.88287C6.76087 10.0913 6.77369 10.4916 7.04703 10.6829L12.5 14.5" stroke="#A796E4" stroke-width="1.5" stroke-linecap="round"/>
    <Circle cx="12.5" cy="5.5" r="2" fill="#A796E4"/>
    <Circle cx="12.5" cy="14.5" r="2" fill="#A796E4"/>
    <Circle cx="5.5" cy="10.5" r="2" fill="#A796E4"/>
    </Svg>
    
    
  );
};

export default CrossSvg;