import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { recoilUser } from '../recoil/atom'


export default function Header() {
    const [user , setUser] = useRecoilState(recoilUser)
    const navigate = useNavigate()
  return (
    <div className='header'>
      <div className='container'>
        <div className='nav'>
            <div className='logo'>
                <h2><img src="" alt="" /></h2>
            </div>
            <div className='menu'></div>
            <ul className='etc'>
                <li>
                {user && 
                    <button onClick={()=>{
                        setUser(null)
                        navigate("/")
                    }}>Logout</button>
                }
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
