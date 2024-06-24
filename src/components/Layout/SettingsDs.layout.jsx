import SettingsComponentsDs from "../SettingsDs.value"
import { FlexContainer, PaddingContainer, BoldText } from "../../styles/Global.styled"

const SettingsDsL = () => {
    return (
        <PaddingContainer top="2rem" bottom="2rem" left="2rem" right="2rem">
            <FlexContainer direction="column" gap="2rem">
                <div>
                    <FlexContainer>
                        <BoldText size="2rem" color="#253763">Settings</BoldText>
                    </FlexContainer>
                </div>
                <SettingsComponentsDs />
            </FlexContainer>
        </PaddingContainer>
    )
}

export default SettingsDsL