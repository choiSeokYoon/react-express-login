import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { recoilPost, recoilUser } from '../recoil/atom';
import './Noticeboard.scss'
import ViewPost from './ViewPost';

export default function Noticeboard() {
    const [post, setPost] =useRecoilState(recoilPost)
    
    const [showModal, setShowModal] = useState(false)
    const [selectedPostId, setSelectedPostId] = useState(null); 
    //post 모달창

    const handleModal = (postId) =>{
        setSelectedPostId(postId); // 클릭한 게시글의 postId를 상태로 저장
        setShowModal(!showModal);
    }

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const data = await axios.get("http://localhost:8080/api/post")
                console.log(data.data)
                setPost(
                    //순서
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
    
    return (
        (post && (
            <div className='noticeboard'>
                {post.map((item)=>(
                    <>
                        <div className='notice_box' onClick={() => handleModal(item._id)} key={item._id}> 
                            <div className='post_title'>{item.title}</div>
                        </div>
                
                        <div>
                        {selectedPostId === item._id && showModal && // 상태와 모달 모두 일치할 때만 보여줌
                            <ViewPost item={item}/>
                        }
                        </div>
                    </>
                ))}
            </div>
        ))
    )
}


