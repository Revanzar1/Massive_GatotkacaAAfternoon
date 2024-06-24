import SettingsComponentsMs from "../SettingsMs.value"
import { ResetPwContainer } from "../../styles/GantiPassword.styled"
import { BoldText, FlexContainer, PaddingContainer, ParaText } from "../../styles/Global.styled"

const GantiPasswordMsV = () => {
    return (
        <PaddingContainer top="2rem" bottom="2rem" left="2rem" right="2rem">
            <FlexContainer direction="column" gap="2rem">
                <div>
                    <FlexContainer justify="space-between">
                        <BoldText size="2rem" color="#253763">Settings</BoldText>
                        <BoldText size="1.5rem" color="#253763">Settings / <BoldText color="#1E73BE">Ganti Kata Sandi</BoldText></BoldText>
                    </FlexContainer>
                </div>
                <div>
                    <FlexContainer justify="space-between">
                        <div>
                            <SettingsComponentsMs />
                        </div>
                        <div>
                            <ResetPwContainer>
                                <ParaText color="#253763" size="1.5rem">Ganti Kata Sandi Anda</ParaText>
                                <input type="text" placeholder="Masukkan sandi lama.." />
                                <input type="text" placeholder="Masukkan sandi baru.." />
                                <input type="text" placeholder="Ulangi sandi lama.." />
                                <input type="submit" placeholder="Simpan" id="reset-btn" />
                            </ResetPwContainer>
                        </div>
                    </FlexContainer>
                </div>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default GantiPasswordMsV