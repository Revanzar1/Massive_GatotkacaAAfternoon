import Footer from "../components/Footer"
import SettingsMsV from "../components/Layout/SettingsMs.layout"
import NavbarMs from "../components/NavbarMs"
import SidebarMS from "../components/SidebarMs"
import { FlexContainer, PaddingContainer } from "../styles/Global.styled"

const SettingsMs = () => {
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
                        <SettingsMsV />
                    </FlexContainer>
                </PaddingContainer>
                <Footer />
            </FlexContainer>
        </FlexContainer>
    )
}

export default SettingsMs