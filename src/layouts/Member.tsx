import * as React from 'react'
import Center from '../styles/Center'
import { MemberIntroduction } from '../component/MemberIntroductio'
import { CircleTextTitle } from '../component/CircleTextTitle'


const Member: React.FC = () => {
	return (
		<article>
			<CircleTextTitle title={'Member'} />
			<Center>
				<MemberIntroduction memberName={'Gouten'} memberColor={'E60012'} membarLogo={'Gouten'} />
				<MemberIntroduction memberName={'Mil'} memberColor={'00A0E9'} membarLogo={'Mil'} />
			</Center>
		</article>
	)
}

export default Member