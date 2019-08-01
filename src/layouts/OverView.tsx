import * as React from 'react'
import { CircleTextTitle } from '../component/CircleTextTitle'
import { OverViewSection } from '../styles/OverView'
import { CircleDescription } from '../component/CircleDescription'

const OverView:React.FC = () => {
  return(
    <OverViewSection>
		  <CircleTextTitle title={'Shitty Circle'} />
			<CircleDescription text={'ホゲヌルフーバーは皆様に虚無をお届けするために結成したサークルです。'} />
			<br />
			<CircleTextTitle title={'Circle Discription'} />
			<CircleDescription text={'ホゲヌルフーバーとは、意味の無いことを示す４つの単語[hoge,null,foo,bar]を組み合わせて出来た名前です。'} />
			<CircleDescription text={'hogeは日本語圏のプログラマーによく使われる単語です。'} />
			<CircleDescription text={'他にもpiyo,huga,hugeなどたくさんのバリエーションがあります。'} />
			<CircleDescription text={'我々は{ 読んでホゲ！　聴いてフガ！}と感じられる無念無想な作品を提供していきます。'} />
		</OverViewSection>
	)
}

export default OverView
