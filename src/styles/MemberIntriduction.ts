import styled from '@emotion/styled'

type IProps = {
	color?: string
	place?: string
}

export const MemberColor = styled.section`
  background-color: #${(props: IProps) => props.color};
	text-align: center;
  width: 700px;
	height: 400px;
	font-size: 40px;
`