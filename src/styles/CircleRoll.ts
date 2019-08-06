import styled from '@emotion/styled'

export const CircleRoll = styled.img`
  width: 200px;
  height: 200px;
  animation: flip 5s linear infinite;
  transform-style: preserve-3d;
 
  @keyframes flip {
    0%   { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }
`