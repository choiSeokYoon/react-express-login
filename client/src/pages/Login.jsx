import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { recoilUser } from '../recoil/atom';
import './Login.scss'

export default function Login() {
  const email = useRef('');
  const password = useRef('');
  const [user, setUser] = useRecoilState(recoilUser);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post('http://localhost:8080/api/auth/login', {
        email: email.current.value,
        password: password.current.value,
      });
      email.current.value = '';
      password.current.value = '';
      setUser(data.data);
      navigate('/main');
      alert('로그인 성공');
    } catch (error) {
      console.log(error);
      alert('로그인 실패');
    }
};

  return (
    <div className="login">
        <div className="login_container">
            <div className="login_title">
                <span>Have an acoount?</span>
                <h1>로그인</h1>
            </div>
            
            <form className="login_form" onSubmit={handleSubmit}>
                <div className='input_field'>
                    <input 
                        type="email" 
                        placeholder='email' 
                        ref={email} 
                        className="email"
                    />
                </div>
                <div className='input_field'>
                    <input 
                        type="password" 
                        placeholder='password' 
                        ref={password} 
                        className="password"
                    />
                </div>
                <button type="submit" className='login_submit'>login</button>
                <div className='bottom'>
                    <div className='left'>
                        <input type="checkbox" id='check' />
                        <label for="check">기억하기</label>
                    </div>
                    <div className='right'>
                        <Link to="/register">회원가입</Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
  
  );
}