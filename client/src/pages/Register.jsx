import axios from 'axios';
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Register.scss'

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
        passwordAgain.current.setCustomValidity("비밀번호가 일치하지 않음");
        } else {
        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
        };
        try {
            await axios.post("http://localhost:8080/api/auth/register", user);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
        }
    };
  return (
    <div className="login">
        <div className="login_container">
            <div className="login_title">
                <h1>회원가입</h1>
            </div>
        
            <form className="login_form" onSubmit={handleClick}>
                <div className="input_field">
                    <input
                        placeholder="Username"
                        required
                        ref={username}
                        className="loginInput"
                    />
                </div>
                <div className='input_field'>
                    <input
                        placeholder="Email"
                        required
                        ref={email}
                        className="loginInput"
                        type="email"
                    />
                </div>
                <div className='input_field'>
                    <input
                        placeholder="Password"
                        required
                        ref={password}
                        className="loginInput"
                        type="password"
                        minLength="6"
                    />
                </div>
            
                <div className='input_field'>
                    <input
                        placeholder="Password Again"
                        required
                        ref={passwordAgain}
                        className="loginInput"
                        type="password"
                    />
                </div>
                <div className='bottom_btn'>
                    <button className="loginButton" type="submit">
                        가입하기
                    </button>
                    <div className='login_prev'>
                        <Link to="/">로그인 하러 가기</Link>
                    </div>
                </div>
            </form>
        
        </div>
    </div>
    )
}
