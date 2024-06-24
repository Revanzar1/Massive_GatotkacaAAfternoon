import { HomeContainer, HomeLogin, HomeLoginContainer } from "../styles/Home.styled"
import background from "../assets/marvin-meyer-SYTO3xs06fU-unsplash1.png"
import { BoldText, FlexContainer, ParaText } from "../styles/Global.styled"
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <HomeContainer
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <HomeLogin>
                <HomeLoginContainer>
                    <div>
                        <div direction="column" className="judul">
                            <div className="logo"><BoldText size="2.5rem">Webpress</BoldText></div>
                            <div className="globe"><HiOutlineGlobeAlt /></div>
                        </div>
                        <FlexContainer direction="column" gap="10px">
                            <BoldText size="1.3rem">SELAMAT DATANG</BoldText>
                            <ParaText size="1.2rem">DI SISTEM PRESENSI</ParaText>
                            <ParaText size="1.2rem">STIE Bina Karya</ParaText>
                        </FlexContainer>
                        <div className="login">
                            <ParaText className="desc">Silahkan Masuk:</ParaText>
                            <FlexContainer>
                                <Link to="/login">Klik</Link>
                            </FlexContainer>
                        </div>
                    </div>
                </HomeLoginContainer>
            </HomeLogin>
        </HomeContainer>
    )
}

export default Home