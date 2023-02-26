import axios from 'axios';
import React, { useRef } from 'react'
import { useRecoilState } from 'recoil';
import { recoilUser } from '../recoil/atom';
import './NewPost.scss'

export default function Post({handleModal}) {
    const [user , setUser] = useRecoilState(recoilUser)
    const title = useRef('');
    const content = useRef('');

    const handleClick = async (e) =>{
        e.preventDefault();
        const item = {
            userId:user._id,
            title:title.current.value,
            content:content.current.value
        };
        try{
            await axios.post("http://localhost:8080/api/post/", item)
            window.location.reload();
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='post_modal'>
            <div className='post_container'>
                <div>
                    <p onClick={handleModal}>x</p>
                </div>
                <div className='new_post_box'>
                    <form onSubmit={handleClick}>
                        <div className='post_title'>
                            <input type="text" ref={title}/>
                        </div>
                        <div className='content'>
                            <input type="text" ref={content}/>
                        </div>
                        <button type='submit'>추가</button>
                    </form>
                    
                </div>
            </div>
        </div>
        )
    }
