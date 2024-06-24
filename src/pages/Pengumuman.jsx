import Footer from "../components/Footer"
import PengumumanV from "../components/Layout/Pengumuman.value"
import NavbarMs from "../components/NavbarMs"
import SidebarMS from "../components/SidebarMs"
import { FlexContainer, PaddingContainer } from "../styles/Global.styled"

const Pengumuman = () => {
    return (
        <FlexContainer>
            <SidebarMS />
            <FlexContainer width="100%" direction="column">
                <NavbarMs />
                <PaddingContainer
                    bottom="2rem"
                    right="2rem"
                    left="2rem"
                >
                    <FlexContainer direction="column">
                        <PengumumanV />
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default Pengumuman