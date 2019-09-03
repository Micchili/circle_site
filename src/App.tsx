import React from 'react';
import Top from './pages/top'
import './App.css'
import * as Styled from './styles/App'

const App :React.FC = () => {
  return (
    <div>
      <Styled.Global />
      <Top />
    </div>
  )
}

export default App;
