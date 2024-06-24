import { HomeContainer, HomeLogin } from "../styles/Home.styled"
import background from "../assets/marvin-meyer-SYTO3xs06fU-unsplash1.png"
import { BoldText } from "../styles/Global.styled"
import { LoginContainer } from "../styles/Login.styled"
import { Link } from "react-router-dom"

const LoginDs = () => {
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
                        <BoldText size="2.5rem"><Link to="/" className="name">Webpress</Link></BoldText>
                        <BoldText size="1.4rem">Masukkan Akun dan Password Anda</BoldText>
                    </div>
                    <div>
                        <form action="">
                            <input type="text" placeholder="Username" />
                            <input type="text" placeholder="Password" />
                            <Link className="forgot-pw">Lupa Password?</Link>
                            <Link to="/dosen/dashboard" className="btn">Login</Link>
                        </form>
                    </div>
                </LoginContainer>
            </HomeLogin>
        </HomeContainer>
    )
}

export default LoginDs