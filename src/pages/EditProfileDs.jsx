import Footer from "../components/Footer"
import EditProfileDsV from "../components/Layout/EditProfileDs.value"
import NavbarDs from "../components/NavbarDs"
import SidebarDs from "../components/SidebarDs"
import { FlexContainer, PaddingContainer } from "../styles/Global.styled"

const EditProfileDs = () => {
    return (
        <FlexContainer>
            <SidebarDs />
            <FlexContainer width="100%" direction="column">
                <NavbarDs />
                <PaddingContainer>
                    <FlexContainer direction="column">
                        <EditProfileDsV />
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default EditProfileDs