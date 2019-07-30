import * as React from 'react'
import Center from '../styles/Center'
import { MemberIntroduction } from '../component/MemberIntroductio'
import { MemberImage } from '../component/MemberImage'

const Member:React.FC= () => {
	return (
		<div>
			<Center>
        <MemberIntroduction memberName={'Gouten'} memberColor={'E60012'}>
					<MemberImage memberLogo={true} />
				</MemberIntroduction>
				<MemberIntroduction memberName={'Mil'} memberColor={'00A0E9'}>
					<MemberImage memberLogo={false} />
				</MemberIntroduction>
			</Center>
		</div>
	)
}

export default Member