import * as React from 'react'
import Center from '../styles/Center'
import { MemberIntroduction } from '../component/MemberIntroductio'

const Member = () => {
	return (
		<div>
			<Center>
        <MemberIntroduction memberName={'Gouten'} memberColor={'E60012'} />
			</Center>
			<Center>
				<MemberIntroduction memberName={'Mil'} memberColor={'00A0E9'} />
			</Center>
		</div>
	)
}

export default Member