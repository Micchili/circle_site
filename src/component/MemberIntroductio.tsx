import * as React from 'react'
import { MemberColor } from '../styles/MemberIntriduction'

type IProps = {
	memberColor?: string
	memberName?: string
}

export const MemberIntroduction :React.FC<IProps> = (memberColor,memberName) => {
    return (
	    <>
				<MemberColor color={memberColor}>
				  <h1>{memberName}</h1>
				</MemberColor>
			</>
	)
}