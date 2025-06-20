import { useState } from 'react'

import './App.css'
import UserContextProvider from './Context/UserContextPeovider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {


  return (
    <UserContextProvider>
     <h1>React with chai and share is important</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
