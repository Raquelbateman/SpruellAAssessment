import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchingAxios from './components/FetchingAxios'
import CountContent from './components/CountContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchingAxios/>
      <CountContent/>
    </>
  )
}

export default App
