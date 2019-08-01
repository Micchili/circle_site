import * as React from 'react'
import { CircleName } from '../component/CircleName'
import { CircleImage } from '../component/CircleImage'
import Center from '../styles/Center'
import { Header } from '../styles/Header'
// import '../App.css'

const FrestView: React.FC = () => {
	return (
		<Header>
			<Center>
				<CircleImage />
			</Center>
			<Center>
				<CircleName />
			</Center>
		</Header>
	)
}

export default FrestView