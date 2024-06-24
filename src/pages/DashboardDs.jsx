import Footer from "../components/Footer"
import DashboardDsV from "../components/Layout/DashboardDs.value"
import NavbarDs from "../components/NavbarDs"
import SidebarDs from "../components/SidebarDs"
import { DashboardContainer } from "../styles/DashboardMs.styled"
import { BoldText, FlexContainer, PaddingContainer } from "../styles/Global.styled"


const DashboardDs = () => {
    return (
        <FlexContainer>
            <SidebarDs />
            <FlexContainer width="100%" direction="column">
                <NavbarDs />
                <PaddingContainer
                    top="2rem"
                    bottom="2rem"
                    right="2rem"
                    left="2rem"
                >
                    <FlexContainer direction="column">
                        <h1><BoldText color="#253763" size="2rem">Dashboard</BoldText></h1>
                        <DashboardContainer>
                            <DashboardDsV />
                        </DashboardContainer>
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default DashboardDs