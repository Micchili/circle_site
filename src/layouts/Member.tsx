import * as React from 'react'
import Center from '../styles/Center'
import { MemberIntroduction } from '../component/MemberIntroductio'
import { CircleTextTitle } from '../component/CircleTextTitle'
import Fade from '../styles/Fade'

const Member: React.FC = () => {
	const [goutenShow, goutenChangeShow] = React.useState(false)
	const [milShow, milChangeShow] = React.useState(false)

	const milClick = () => milChangeShow(milShow ? false : true)
	const goutenClick = () => goutenChangeShow(goutenShow ? false : true)
	
	return (
		<article>
			<Center>
			  <CircleTextTitle title={'Member'} />
			</Center>
			<Center>
				<div onClick={goutenClick}>
					<MemberIntroduction 
						memberName={'Gouten'}
						memberColor={'E60012'}
						membarLogo={'Gouten'}
					/>
				</div>
				<Fade
					membarColor={'E60012'}
					membarPosition={'right'}
					unmountOnExit in={goutenShow}
					onClick={goutenClick}
					timeout={300}
				>
					<p>絵と漫画、グラフティ</p>
					<p>デザイナー</p>
					<p>レトロゲーがお好きでしょ</p>
        </Fade>
				<div onClick={milClick}>
					<MemberIntroduction 
						memberName={'Mil'}
						memberColor={'00A0E9'}
						membarLogo={'Mil'}
					/>
				</div>
				<Fade
					membarColor={'00A0E9'}
				  membarPosition={'left'}
					unmountOnExit in={milShow}
					onClick={milClick}
					timeout={300}
				>
					<p>ドット絵とかを描いている</p>
					<p>プログラマー</p>
					<p>英語を打って暮らしてる</p>
        </Fade>
			</Center>

		</article>
	)
}

export default Member