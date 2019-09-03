import * as React from 'react'
import Center from '../styles/Center'
import { MemberIntroduction } from '../component/MemberIntroductio'
import { CircleTextTitle } from '../component/CircleTextTitle'
import Fade from '../styles/Fade'
import { CloseButton } from '../component/CloseButton';
import { MembarLayoutsArticale } from '../styles/MembarLayouts';

const Member: React.FC = () => {
	const [goutenShow, goutenChangeShow] = React.useState(false)
	const [milShow, milChangeShow] = React.useState(false)

	const milClick = () => milChangeShow(milShow ? false : true)
	const goutenClick = () => goutenChangeShow(goutenShow ? false : true)

	return (
		<Center>
			<MembarLayoutsArticale>
				<CircleTextTitle title={'Member'} />
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
						<CloseButton click={goutenClick} />
						<p>絵と漫画、グラフティ</p>
						<p>デザイナー</p>
						<p>このサイトのロゴを描いた</p>
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
						timeout={300}
					>
						<CloseButton click={milClick} />
						<p>ドット絵とプログラマー</p>
						<p>このサイト作った方</p>
						<p>英語を打って暮らしてる</p>
						<p>腰を痛めている</p>
					</Fade>
				</Center>
			</MembarLayoutsArticale>
		</Center>
	)
}

export default Member