import { useState } from 'react'
import './App.css'
import Rerender from './rerender'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className="App">
      <Rerender />
    </div>
    </>
  )
}

export default App
