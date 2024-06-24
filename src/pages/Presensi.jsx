import Footer from "../components/Footer"
import PresensiV from "../components/Layout/Presensi.value"
import NavbarDs from "../components/NavbarDs"
import SidebarDs from "../components/SidebarDs"
import { FlexContainer, PaddingContainer } from "../styles/Global.styled"

const Presensi = () => {
    return (
        <FlexContainer>
            <SidebarDs />
            <FlexContainer width="100%" direction="column">
                <NavbarDs />
                <PaddingContainer>
                    <FlexContainer direction="column">
                        <PresensiV />
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default Presensi