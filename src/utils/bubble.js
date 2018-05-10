import { keyframes } from 'styled-components';

const bubble = (fromWidth, toWidth, fromOffsetLeft, toOffsetLeft) => 
  keyframes`
    0% {
      transform: translateX(${fromOffsetLeft}px);
      width: ${fromWidth}px;
    }
    35%{
      width: ${Math.abs(fromWidth - toWidth) / 2}px;
    }
    50% {
      transform: translateX(${toOffsetLeft + (toWidth / 2)}px);
    }
    100% {
      transform: translateX(${toOffsetLeft}px);
      width: ${toWidth}px;
    }
`;

export default bubble;