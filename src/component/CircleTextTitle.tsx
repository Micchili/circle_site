import * as React from 'react'
import { TextTitle } from '../styles/CircleTextTitle'


type IProps = {
	title: string
}

export const CircleTextTitle: React.FC<IProps> = (props) => {
	return (
		<>
		  <TextTitle>
		    {props.title}
		  </TextTitle>
		</>
  )
}