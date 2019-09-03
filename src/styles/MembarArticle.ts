import styled from '@emotion/styled'

export const MembarArticle = styled.article`
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