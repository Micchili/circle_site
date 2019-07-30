import * as React from 'react'
import { MemberColor } from '../styles/MemberIntriduction'

type IProps = {
	memberColor?: string
	memberName?: string
}

export const MemberIntroduction: React.FC<IProps> = (props) => {
	return (
		<>
			<MemberColor color={props.memberColor}>
				<h1>{props.memberName}</h1>
			</MemberColor>
		</>
	)
}