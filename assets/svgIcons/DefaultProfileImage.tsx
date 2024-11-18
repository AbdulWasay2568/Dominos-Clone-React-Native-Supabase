import React from 'react';
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg';

const DefaultProfileImage: React.FC = () => {
  return (
    <Svg width="44" height="43" viewBox="0 0 44 43" fill="none">
      <G clipPath="url(#clip0_5382_47916)">
        <Rect x="0.975586" y="0.125" width="42.3417" height="42.3417" rx="21.1709" fill="#D0D5DD" />
        <Path d="M22.5239 27.6719C26.3209 27.6719 29.3989 24.5938 29.3989 20.7969C29.3989 16.9999 26.3209 13.9219 22.5239 13.9219C18.727 13.9219 15.6489 16.9999 15.6489 20.7969C15.6489 24.5938 18.727 27.6719 22.5239 27.6719Z" fill="white" />
        <Path d="M22.5246 31.1094C15.6359 31.1094 10.0259 35.7294 10.0259 41.4219C10.0259 41.8069 10.3284 42.1094 10.7134 42.1094H34.3359C34.7209 42.1094 35.0234 41.8069 35.0234 41.4219C35.0234 35.7294 29.4134 31.1094 22.5246 31.1094Z" fill="white" />
      </G>
      <Rect x="1.50486" y="0.654272" width="41.2832" height="41.2832" rx="20.6416" stroke="white" strokeWidth="1.05854" />
      <Defs>
        <ClipPath id="clip0_5382_47916">
          <Rect x="0.975586" y="0.125" width="42.3417" height="42.3417" rx="21.1709" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default DefaultProfileImage;
