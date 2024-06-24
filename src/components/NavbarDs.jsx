import { Link } from "react-router-dom"
import SearchBar from "./Layout/SearchBar"
import { BoldText, FlexContainer, ParaText } from "../styles/Global.styled"
import { NavbarContainer, NavbarImg, NavbarProfile } from "../styles/Navbar.styled"
import LogoKampus from "../assets/brand.svg"
import ImgProfile from "../assets/image4.jpeg"

const NavbarDs = () => {
    return (
        <NavbarContainer>
            <FlexContainer justify="space-between">
                <FlexContainer align="center" gap="10px">
                    <NavbarImg>
                        <img src={LogoKampus} alt="Logo Kampus" />
                    </NavbarImg>
                    <SearchBar />
                </FlexContainer>
                <div>
                    <NavbarProfile>
                        <FlexContainer direction="column" align="flex-end">
                            <BoldText>Eka Mayastika Sinaga</BoldText>
                            <ParaText>Dosen</ParaText>
                        </FlexContainer>
                        <Link to="/dosen/profile">
                            <NavbarImg>
                                <img src={ImgProfile} alt="Foto Profile" />
                            </NavbarImg>
                        </Link>
                    </NavbarProfile>
                </div>
            </FlexContainer>
        </NavbarContainer>
    )
}

export default NavbarDs