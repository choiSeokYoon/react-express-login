import React from 'react'
import { useRecoilState } from 'recoil'
import Noticeboard from '../components/Noticeboard'
import Profile from '../components/Profile'
import { recoilUser } from '../recoil/atom'
import './Main.scss'
import Header from './../components/header/Header';

export default function Main() {
    
  return (
    <div className='main'>
      <div className='container'>
        <Header/>
        <div className='main_box'>
          {/* <Noticeboard/>
          <Profile/> */}
        </div>
        
      </div>
    </div>
  )
}
