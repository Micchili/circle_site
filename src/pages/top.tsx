import * as React from 'react'
import Header from '../layouts/Header'
import Member from '../layouts/Member'
import OverView from '../layouts/OverView'
import Center from '../styles/Center';

const Top: React.FC = () => {
	return (
		<>
			<Header />
			<Center>
			  <OverView />
			</Center>
			<Member />
		</>
	)
}

export default Top