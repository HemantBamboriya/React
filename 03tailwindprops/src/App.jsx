import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="bg-blue-500 rounded-2xl mb-4">Tailwind test</h1>
        <Card  name="Peterson" description="hi i am from america" price="5"/>
        <Card  name="Hemant" description="hi i am from India" price="100"/>
    </>
  )
}

export default App
