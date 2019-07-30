import * as React from 'react'
import { MemberImageChara } from '../styles/MemberImage'
import gouten from '../image/gouten.jpg'
import mil from '../image/mil.png'

interface IProps {
	memberLogo?: boolean
}

export const MemberImage: React.FC<IProps> = (props) => {
	const logo = props.memberLogo ? gouten : mil
	return (
		<>
			<MemberImageChara src={logo} />
		</>
	)
}