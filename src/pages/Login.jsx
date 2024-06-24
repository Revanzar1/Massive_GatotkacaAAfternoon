import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HomeContainer, HomeLogin } from "../styles/Home.styled";
import background from "../assets/marvin-meyer-SYTO3xs06fU-unsplash1.png";
import { BoldText } from "../styles/Global.styled";
import { LoginContainer } from "../styles/Login.styled";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === 'adrian' && password === 'adrian123') {
            navigate('/mahasiswa/dashboard');
        } else if (username === 'eka' && password === 'eka123') {
            navigate('/dosen/dashboard');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <HomeContainer
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <HomeLogin>
                <LoginContainer>
                    <div className="hero-login">
                        <BoldText size="2.5rem"><Link to="/" className="title">Webpress</Link></BoldText>
                        <BoldText size="1.35rem">Masukkan Akun dan Password Anda</BoldText>
                    </div>
                    <div>
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <div style={{ position: 'relative' }}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{ paddingRight: '40px' }}
                                />
                                <span
                                    onClick={togglePasswordVisibility}
                                    className='show-password-icon'
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            <Link className="forgot-pw">Lupa kata sandi?</Link>
                            <button type="submit" className="btn">Masuk</button>
                        </form>
                    </div>
                </LoginContainer>
            </HomeLogin>
        </HomeContainer>
    );
};

export default Login;
