import styled from '@emotion/styled'

export const OverViewCenterStart = styled.div`
 display: flex;
 justify-content: flex-start;
`

export const CircleRoll = styled.img`
  width: 200px;
  height: 200px;
  animation: flip 5s linear infinite;
  transform-style: preserve-3d;

  @media screen and (max-width: 767px) {
    height: 100px;
    width: 100px;
  }
 
  @keyframes flip {
    0%   { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }
`

export const OverViewSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (min-width: 1024px) {
    height: 1000px;
    width: 1100px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 700px;
    width: 750px;
  }
  @media screen and (max-width: 767px) {
    height: 400px;
    width: 350px;
  }
`