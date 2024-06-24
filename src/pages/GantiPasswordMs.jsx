import Footer from "../components/Footer"
import GantiPasswordMsV from "../components/Layout/GantiPasswordMs.value"
import NavbarMs from "../components/NavbarMs"
import SidebarMS from "../components/SidebarMs"
import { FlexContainer, PaddingContainer } from "../styles/Global.styled"

const GantiPasswordMs = () => {
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
                        <GantiPasswordMsV />
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default GantiPasswordMs