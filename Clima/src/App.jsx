import { useState } from 'react'
import './App.css'
import './Components/clima/Climaestate'
import { Climaestate } from './Components/clima/Climaestate'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Climaestate/>
      </div>
      
    </>
  )
}

export default App
