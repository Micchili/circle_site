import styled from '@emotion/styled'

export const MembarLayoutsArticale = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 1100px;
  height: 600px;

  @media screen and (min-width: 1024px) {
    width: 1100px;
  height: 600px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 750px;
    height: 500px;
  }
  @media screen and (max-width: 767px) {
    height: 400px;
    width: 350px;
  }
`