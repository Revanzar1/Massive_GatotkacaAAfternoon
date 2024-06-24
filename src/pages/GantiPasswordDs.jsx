import Footer from "../components/Footer"
import GantiPasswordDsV from "../components/Layout/GantiPasswordDs.value"
import NavbarDs from "../components/NavbarDs"
import SidebarDs from "../components/SidebarDs"
import { FlexContainer, PaddingContainer } from "../styles/Global.styled"

const GantiPasswordDs = () => {
    return (
        <FlexContainer>
            <SidebarDs />
            <FlexContainer width="100%" direction="column">
                <NavbarDs />
                <PaddingContainer
                    bottom="2rem"
                    right="2rem"
                    left="2rem"
                >
                    <FlexContainer direction="column">
                        <GantiPasswordDsV />
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default GantiPasswordDs