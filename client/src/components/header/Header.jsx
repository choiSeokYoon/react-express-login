import React from 'react'
import { useRecoilState } from 'recoil';
import { recoilUser } from '../../recoil/atom';
import "./Header.scss"
export default function Header() {
    const [user, setUser] = useRecoilState(recoilUser)
  return (
    <header>
        <div className='nav'>
              <div className='nav_left'>
                  <h2>로고</h2>
              </div>
              <div className='nav_right'>
                  <div>dashboard</div>
                  <div>log out</div>
              </div>
        </div>
    </header>
  )
}
