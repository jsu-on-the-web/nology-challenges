import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  let darkMode = true;

  return (
    <>
      <button className="toggle-button">Change to {darkMode ? "light mode" : "dark mode"}</button>
    </>
  )
}

export default App
