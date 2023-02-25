import React from 'react'
import { useRecoilState } from 'recoil'
import Noticeboard from '../components/Noticeboard'
import Profile from '../components/Profile'
import { recoilUser } from '../recoil/atom'
import './Main.scss'

export default function Main() {
    const [user, setUser] = useRecoilState(recoilUser)
  return (
    <div className='main'>
      <div className='container'>
        <div className='main_box'>
          <Noticeboard/>
          <Profile/>
        </div>
        
      </div>
    </div>
  )
}
