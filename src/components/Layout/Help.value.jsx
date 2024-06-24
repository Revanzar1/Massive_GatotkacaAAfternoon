import { BoldText, FlexContainer, PaddingContainer } from "../../styles/Global.styled"
import { HelpContact, HelpContainer } from "../../styles/Help.styled"
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineMapPin } from "react-icons/hi2";

const HelpV = () => {
    return (
        <PaddingContainer top="2rem" bottom="2rem" left="2rem" right="2rem">
            <FlexContainer direction="column" gap="2rem">
                <div>
                    <FlexContainer justify="space-between">
                        <BoldText size="2rem" color="#253763">Help</BoldText>
                        <BoldText size="1.5rem" color="#253763">Settings / <BoldText color="#1E73BE">Help</BoldText></BoldText>
                    </FlexContainer>
                </div>
                <div>
                    <HelpContainer>
                        <h2>FAQs</h2>
                        <div>
                            <ul>
                                <li>Bagaimana cara mengganti password akun?</li>
                                <li>Bagaimana cara melihat jadwal mata kuliah pada semester lain?</li>
                                <li>Bagaimana cara menghubungi pihak kampus yang baik dan resmi?</li>
                                <li>Bagaimana cara  mengedit informasi mahasiswa/i?</li>
                            </ul>
                        </div>
                    </HelpContainer>
                    <HelpContact>
                        <h2>Kontak Kami</h2>
                        <div>
                            <span>
                                <p><HiOutlinePhone /></p>
                                <p>0832131933123</p>
                            </span>
                            <span>
                                <p><HiOutlineEnvelope /></p>
                                <p>emailkami@gmail.com</p>
                            </span>
                            <span>
                                <p><HiOutlineMapPin /></p>
                                <p>Kota Tebing Tinggi, Sumatera Utara</p>
                            </span>
                        </div>
                    </HelpContact>
                </div>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default HelpV