import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './components/Star'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StarRating  noOfStars={10}/>
    </>
  )
}

export default App
