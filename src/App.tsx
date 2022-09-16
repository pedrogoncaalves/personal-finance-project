import { useState } from 'react'
import * as C from './components/App.styles'


function App() {
  const [count, setCount] = useState(0)

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Controle Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        ...
      </C.Body>
    </C.Container>
  )
}

export default App
