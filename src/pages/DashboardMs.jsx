import Footer from "../components/Footer"
import DashboardMsV from "../components/Layout/DashboardMs.value"
import NavbarMs from "../components/NavbarMs"
import SidebarMS from "../components/SidebarMs"
import { DashboardContainer } from "../styles/DashboardMs.styled"
import { BoldText, FlexContainer, PaddingContainer } from "../styles/Global.styled"

const DashboardMs = () => {
    return (
        <FlexContainer>
            <SidebarMS />
            <FlexContainer width="100%" direction="column">
                <NavbarMs />
                <PaddingContainer
                    top="2rem"
                    bottom="2rem"
                    right="2rem"
                    left="2rem"
                >
                    <FlexContainer direction="column">
                        <h1><BoldText color="#253763" size="2rem">Dashboard Mahasiswa</BoldText></h1>
                        <DashboardContainer>
                            <DashboardMsV />
                        </DashboardContainer>
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default DashboardMs