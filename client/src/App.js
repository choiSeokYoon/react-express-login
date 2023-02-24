import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login'
import Main from './pages/Main'
import Register from './pages/Register'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/main' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

