import * as React from 'react'
import Header from '../layouts/Header'
import Member from '../layouts/Member'
import OverView from '../layouts/OverView'
import Center from '../styles/Center';
import Footer from '../layouts/Footer';

const Top: React.FC = () => {
	return (
		<>
			<Center>
				<Header />
			</Center>
			<Center>
				<OverView />
			</Center>
			<Member />
			<Footer />
		</>
	)
}

export default Top