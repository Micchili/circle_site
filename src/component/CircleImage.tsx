import * as React from 'react'
import logo from '../image/biglogo.jpg' 
import { HeaderCircleImage } from '../styles/CircleImage'

export const CircleImage :React.FC = () => { 
	return (
		<div>
			<HeaderCircleImage src={logo} alt="hogenull" />
		</div>
	)
}