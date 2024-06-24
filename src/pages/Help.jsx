import Footer from "../components/Footer"
import HelpV from "../components/Layout/Help.value"
import NavbarMs from "../components/NavbarMs"
import SidebarMS from "../components/SidebarMs"
import { FlexContainer, PaddingContainer } from "../styles/Global.styled"

const Help = () => {
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
                        <HelpV />
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default Help