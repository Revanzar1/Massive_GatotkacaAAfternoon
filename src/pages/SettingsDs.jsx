import Footer from "../components/Footer"
import SettingsDsV from "../components/Layout/SettingsDs.layout"
import NavbarDs from "../components/NavbarDs"
import SidebarDs from "../components/SidebarDs"
import { FlexContainer, PaddingContainer } from "../styles/Global.styled"

const SettingsDs = () => {
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
                        <SettingsDsV />
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default SettingsDs