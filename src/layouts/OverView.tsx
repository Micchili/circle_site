import * as React from 'react'
import { CircleTextTitle } from '../component/CircleTextTitle'
import { OverViewSection , CircleRoll , OverViewCenterStart } from '../styles/OverViewLayouts'
import { CircleDescription } from '../component/CircleDescription'
import Circle from '../image/circle.jpg' 

const OverView:React.FC = () => {
  return(
    <OverViewSection>
		  <CircleTextTitle title={'Shitty Circle'} />
			<OverViewCenterStart>
				<CircleDescription text={'このサークルは皆様に虚無をお届けするために活動しています。'} />
				<CircleRoll src={Circle} />
			</OverViewCenterStart>
			<br />
			<CircleTextTitle title={'Circle Discription'} />
			<CircleDescription text={'ホゲヌルフーバーとは、意味の無いことを示す４つの単語 hoge null foo bar を組み合わせて出来た名前です。'} />
			<CircleDescription text={'hogeは日本語圏のプログラマーによく使われる単語です。'} />
			<CircleDescription text={'他にもpiyo,huga,hugeなどたくさんのバリエーションがあります。'} />
			<CircleDescription text={'我々は「読んでホゲ！　聴いてフガ！」と感じられる無念無想な作品を提供していきます。'} />
		</OverViewSection>
	)
}

export default OverView
