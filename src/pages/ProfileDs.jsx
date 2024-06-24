import Footer from "../components/Footer"
import ProfileDsV from "../components/Layout/ProfileDs.value"
import NavbarDs from "../components/NavbarDs"
import SidebarDs from "../components/SidebarDs"
import { FlexContainer, PaddingContainer } from "../styles/Global.styled"

const ProfileDs = () => {
    return (
        <FlexContainer>
            <SidebarDs />
            <FlexContainer width="100%" direction="column">
                <NavbarDs />
                <PaddingContainer>
                    <FlexContainer direction="column">
                        <ProfileDsV />
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default ProfileDs