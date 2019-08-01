import React from 'react';
import Top from './pages/top'
import { Global } from '@emotion/core'
import styles from './styles/app'
import './App.css'

const App :React.FC = () => {
  return (
    <div>
      <Global styles={styles} />
      <Top />
    </div>
  )
}

export default App;
