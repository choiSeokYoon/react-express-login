import React from 'react'
import { useRecoilState } from 'recoil'
import Header from '../components/Header'
import { recoilUser } from '../recoil/atom'

export default function Main() {
    const [user, setUser] = useRecoilState(recoilUser)
  return (
    <div>
        <Header/>
      <div>{user&&user.username}</div>
    </div>
  )
}
