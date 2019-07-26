import * as React from 'react'
import MemberLogo from '../image/sChara.png'
import { MemberImageChara } from '../styles/MemberImage'

interface IProps {
	memberLogo?: string
}

export const MemberImage: React.FC<IProps> = (memberLogo) => {
	return (
		<>
			<MemberImageChara src={memberLogo + '.png'} />
		</>
  )
}