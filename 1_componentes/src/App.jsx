import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//Componente pai
import './App.css'

//Importar o componente filho
import FunctionalComponent from './componentes/FunctionalComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World React</h1>
      <FunctionalComponent/>
    </>
  )
}

export default App
