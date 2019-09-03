import styled from '@emotion/styled'

type IProps = {
	color?: string
	place?: string
}

export const MemberColor = styled.section`
  background-color: #${(props: IProps) => props.color};
	text-align: center;
  width: 550px;
	height: 400px;
	font-size: 40px;

	@media screen and (min-width: 1024px) {
    width: 550px;
	  height: 400px;
	  font-size: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 375px;
	  height: 300px;
	  font-size: 38px;
  }
  @media screen and (max-width: 767px) {
    width: 175px;
	  height: 175px;
	  font-size: 28px;
  }
`