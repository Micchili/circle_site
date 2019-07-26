import styled from '@emotion/styled'

interface IProps {
	color?: string
}

export const MemberColor = styled.div`
	display: flex;
	align-content: center;
  background-color: #${(props :IProps) => props.color};
  width: 50vw;
	height: 300px;
	font-size: 40px;
	text-align: center;
`