import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { recoilUser } from '../recoil/atom';
import './Noticeboard.scss'

export default function Noticeboard() {
    const [post, setPost] = useState([]);
    const [user , setUser] = useRecoilState(recoilUser)
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const data = await axios.get("http://localhost:8080/api/post")
                console.log(data.data)
                setPost(
                    data.data.sort((p1, p2) => {
                        return new Date(p2.createdAt) - new Date(p1.createdAt)
                    })
                )
            }catch(err){
                console.log()
            }
        }
        fetchData()
    },[])

    const handleDelete = async(id) => {
        try{
            await axios.delete(`http://localhost:8080/api/post/${id}`,{
                data: {userId:user._id} //요청을 보낸 아이디
            })
            setPost(post.filter( item => item._id !== id ))
        }catch (err) {
            console.log(err)
        }
    }
    

    const handleEdit = async (id) => {
        const newContent = prompt("수정할 내용을 입력하세요.");
        if (newContent) {
          try {
            const response = await axios.put(
              `http://localhost:8080/api/post/${id}`,
              { content: newContent, userId: user._id }
            );
            const updatedPost = response.data;
            setPost((prevPost) =>
              prevPost.map((post) => (post._id === updatedPost._id ? updatedPost : post))
            );
          } catch (error) {
            console.error(error);
          }
        }
      };
    
    
    return (
        (post && (
            <div className='noticeboard'>
                <div className='notice_box'>
                    {post.map((posts)=>(
                        <>
                            <div>{posts.title}</div>
                            <button onClick={() => handleDelete(posts._id)}>삭제</button>
                        </>
                    ))}
                </div>
            </div>
        ))
        
    )
}
