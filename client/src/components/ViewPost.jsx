import axios from 'axios'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { recoilPost, recoilUser } from '../recoil/atom'
import './ViewPost.scss'

export default function ViewPost({item}) {
    const [post, setPost] =useRecoilState(recoilPost)
    const [user , setUser] = useRecoilState(recoilUser)
    const [edit, setEdit] = useState(false)
    
    const handleDelete = async(id) => {
        try{
            if(window.confirm("정말로 삭제하시겠습니까?")) {
                await axios.delete(`http://localhost:8080/api/post/${id}`,{
                    data: {userId:user._id} //요청을 보낸 아이디
                })
                setPost(post.filter( item => item._id !== id ))
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handleEdit = async(id) => {
        try{
            await axios.put(`http://localhost:8080/api/post/${id}`,{
                
            })
        }catch (err) {
            console.log(err)
        }
    }
    
  return (
    <div className='view_post'>
        {
            edit ? (
                <div>{item.content}</div>
            ) : (
            <div>{item.content}</div>
            )
        }
        
        <button onClick={() => handleDelete(item._id)}>삭제</button>
        <button onClick={() => handleEdit(item._id)}>수정</button>
    </div>
  )
}
