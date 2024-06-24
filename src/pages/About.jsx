import Footer from "../components/Footer"
import AboutV from "../components/Layout/About.value"
import NavbarMs from "../components/NavbarMs"
import SidebarMS from "../components/SidebarMs"
import { FlexContainer, PaddingContainer } from "../styles/Global.styled"

const About = () => {
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
                        <AboutV />
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default About