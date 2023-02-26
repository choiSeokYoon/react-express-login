import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { recoilUser } from '../recoil/atom'
import './Profile.scss'
import profileImg from '../assets/messi_img.jpg'
import noProfileImg from '../assets/Default-Profile-Picture-PNG-Download-Image.png'
import Post from './NewPost'

export default function Profile() {
    const [user , setUser] = useRecoilState(recoilUser)
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()

    const handleModal = () =>{
      setShowModal(!showModal)
    }
  return (
    <div className='profile'>
      
      <div className='profile_box'>
        
        {user ? (
        <>
          <div className='profile_img'>
            <h2><img src={profileImg} alt="" /></h2>
          </div>
          <ul className='profile_info'>
            
              <li>
                <p className='user_name'>{user.username}</p>
              </li>
              <li className='btn'>
                <button>Myprofile</button>
                <button onClick={handleModal}>만들기</button>
                
                <button onClick={()=>{
                    setUser(null)
                    navigate("/")
                }}>Logout</button>
              </li>
          </ul>
        </>
        ) : (
          <>
           <div className='profile_img'>
              <h2><img src={noProfileImg} alt="" /></h2>
            </div>
            <ul className='profile_info'>
              <li className='btn'>
                <button onClick={()=>{
                  navigate("/login")
                }}>Login</button>
              </li>
            </ul>
          </>
        )
        
        }
        {showModal && 
          <Post handleModal={handleModal}/>
        }
      </div>
    </div>
  )
}
