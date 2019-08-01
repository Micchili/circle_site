import * as React from 'react'
import { CircleText } from '../styles/CircleDescription'

type IProps = {
	text: string
}

export const CircleDescription: React.FC<IProps> = props => {
	return (
		<CircleText>
			{props.text}
		</CircleText>
	)
}