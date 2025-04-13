import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Subcribe to HRN
      <Button>R100 for a CV</Button>
    </>
  )
}

export default App
