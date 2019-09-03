import styled from '@emotion/styled'

export const HeaderCircleName = styled.div`
  text-align: center;

  @media screen and (min-width: 1024px) {
    width: 1100px;
    font-size: 68px;
    text-shadow: -5px -4px rgb(89, 106, 160);
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 750px;
    font-size: 59px;
    text-shadow: -4px -3px rgb(89, 106, 160);
  }
  @media screen and (max-width: 767px) {
    width: 350px;
    font-size: 40px;
    text-shadow: -2px -1px rgb(89, 106, 160);
  }
`