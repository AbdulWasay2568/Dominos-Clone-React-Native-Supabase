import Svg, {Path} from 'react-native-svg';
import React from 'react';

type Props = {
  fillColor?: string;
};

const SkipNow: React.FC<Props> = ({fillColor}) => {
  return (
    <Svg
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={fillColor || '#5f6368'}>
      <Path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z" />
    </Svg>
  );
};

export default SkipNow;
