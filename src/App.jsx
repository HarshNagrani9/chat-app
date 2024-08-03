import { useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth/Index'
import Chat from './pages/chat/Index'
import Profile from './pages/profile/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter> 
       <Routes >
          <Route path='/auth' element = {<Auth></Auth>} />
          <Route path='/chat' element = {<Chat />} />
          <Route path='/profile' element = {<Profile />} />
          <Route path='*' element = {<Navigate to="/auth" />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
