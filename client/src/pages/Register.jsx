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
    //최소 6자 이상 대소문자, 숫자, 특수문자
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
    
    const handleClick = async (e) => {
        e.preventDefault();
        if (!passwordRegex.test(password.current.value)) {
            password.current.setCustomValidity("비밀번호는 최소 6자 이상이어야 하며, 대문자, 소문자, 숫자, 특수문자를 포함해야 함");
        } else if (passwordAgain.current.value !== password.current.value) {
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
    // 이메일 정규식 추가
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleEmailChange = () => {
        if (!emailRegex.test(email.current.value)) {
            email.current.setCustomValidity("올바른 이메일 형식이 아님");
        } else {
            email.current.setCustomValidity("");
        }
    }

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
                            onChange={handleEmailChange} // 이메일 형식 검사 함수 추가
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
