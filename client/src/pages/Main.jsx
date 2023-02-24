import React from 'react'
import { useRecoilState } from 'recoil'
import { recoilUser } from '../recoil/atom'

export default function Main() {
    const [user, setUser] = useRecoilState(recoilUser)
  return (
    <div>
      <div>{user&&user.username}</div>
    </div>
  )
}
