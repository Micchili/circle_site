import * as React from 'react'
import { MemberColor } from '../styles/MemberIntriduction'
import { MemberImageChara } from '../styles/MemberImage'
import Gouten from '../image/gouten.jpg'
import Mil from '../image/mil.png'

type IProps = {
	memberColor?: string
	memberName?: string
	membarLogo?: string
}

export const MemberIntroduction: React.FC<IProps> = (props) => {
  const logo:string = props.membarLogo  === 'Gouten' ? Gouten : Mil
	return (
		<>
			<MemberColor color={props.memberColor}>
				<h1>{props.memberName}</h1>
        <MemberImageChara src={logo} alt={props.membarLogo} />
			</MemberColor>
		</>
	)
}