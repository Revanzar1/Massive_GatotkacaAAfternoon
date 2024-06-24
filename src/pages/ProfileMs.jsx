import Footer from "../components/Footer"
import ProfileMsV from "../components/Layout/ProfileMs.value"
import NavbarMs from "../components/NavbarMs"
import SidebarMS from "../components/SidebarMs"
import { BoldText, FlexContainer, PaddingContainer } from "../styles/Global.styled"

const ProfileMs = () => {
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
                        <FlexContainer justify="space-between">
                            <BoldText size="2rem" color="#253763">Profile</BoldText>
                            <BoldText size="1.5rem" color="#253763">Settings / <BoldText color="#1E73BE">Profile</BoldText></BoldText>
                        </FlexContainer>
                        <ProfileMsV />
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default ProfileMs