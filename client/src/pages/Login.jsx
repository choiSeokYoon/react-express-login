import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { emailState, passwordState, recoilUser } from '../recoil/atom';

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
          <h1>로그인</h1>
        </div>
        <div className="login_box">
          <form className="login_form" onSubmit={handleSubmit}>
            <div>
              <input type="email" ref={email} />
              <input type="password" ref={password} />
              <button type="submit">전송</button>
            </div>
          </form>
        </div>
        <Link to="/register">회원가입</Link>
      </div>
    </div>
  );
}