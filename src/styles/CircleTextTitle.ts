import styled from '@emotion/styled'

export const TextTitle = styled.h2`
  border-bottom: solid 3px rgb(89, 106, 160);
  
  @media screen and (min-width: 1024px) {
    width: 40%;
    height: 50px;
    font-size: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
    height: 43px;
    font-size: 37px;
  }
  @media screen and (max-width: 767px) {
    width: 70%;
    height: 32px;
    font-size: 24px;
  }
`