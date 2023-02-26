import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login'
import Main from './pages/Main'
import Register from './pages/Register'
import MyProfile from './pages/MyProfile'

import './app.css'
import '../src/style/reset.css'



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Main/>}/>
          <Route path='/myprofile/:user' element={<MyProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

