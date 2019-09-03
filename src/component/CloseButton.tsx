import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../styles/CloseButton';

type IProps = {
  click: () => void
}

export const CloseButton: React.FC<IProps> = (props) => {
  library.add({ faTimesCircle })
  return (
    <Button onClick={props.click}>
      <FontAwesomeIcon icon="times-circle" />
    </Button>
  )
}