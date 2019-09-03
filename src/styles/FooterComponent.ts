import styled from '@emotion/styled'

export const FooterComponent = styled.footer`
  width: 100%;
  text-align: center;
  background-color: #1e1e1e;
  color: #f1f1f1;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 30px;
  }
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`