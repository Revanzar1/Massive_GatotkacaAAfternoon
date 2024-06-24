import { BoldText, FlexContainer, PaddingContainer, ParaText } from "../../styles/Global.styled"
import { ProfileCardImg, ProfileContainer, ProfileLinks } from "../../styles/Profile.styled"
import CardImg from "../../assets/image4.jpeg"
import { NavLink } from "react-router-dom"

const ProfileDsV = () => {
    return (
        <PaddingContainer top="2rem" bottom="2rem" left="2rem" right="2rem">
            <FlexContainer direction="column">
                <div>
                    <FlexContainer justify="space-between">
                        <BoldText size="2rem" color="#253763">Profile</BoldText>
                        <BoldText size="1.5rem" color="#253763">Settings / <BoldText color="#1E73BE">Profile</BoldText></BoldText>
                    </FlexContainer>
                </div>
                <div>
                    <PaddingContainer top="2rem">
                        <FlexContainer justify="space-between">
                            <div>
                                <ProfileCardImg>
                                    <img src={CardImg} alt="img" />
                                    <BoldText size="1.5rem">Eka Mayastika Sinaga</BoldText>
                                    <ParaText size="1.3rem" color="#253763">S1-Manajemen</ParaText>
                                </ProfileCardImg>
                            </div>
                            <div>
                                <ProfileContainer>
                                    <ProfileLinks>
                                        <NavLink to="/dosen/profile">Profile Details</NavLink>
                                        <NavLink to="/dosen/edit-profile">Edit Profile</NavLink>
                                    </ProfileLinks>
                                    <FlexContainer gap="4rem">
                                        <div className="details">
                                            <FlexContainer direction="column" gap="1rem">
                                                <ParaText size="1.3rem">Nama Lengkap</ParaText>
                                                <ParaText size="1.3rem">NIP</ParaText>
                                                <ParaText size="1.3rem">Mata Kuliah</ParaText>
                                                <ParaText size="1.3rem">Alamat</ParaText>
                                                <ParaText size="1.3rem">Tahun Masuk</ParaText>
                                            </FlexContainer>
                                        </div>
                                        <div>
                                            <FlexContainer direction="column" gap="1rem" className="isi-details">
                                                <ParaText size="1.3rem">Eka Mayastika Sinaga</ParaText>
                                                <ParaText size="1.3rem">0110212110</ParaText>
                                                <ParaText size="1.3rem">Manajemen Strategi</ParaText>
                                                <ParaText size="1.3rem">Jl. Bersamanya, Kota Tebing Tinggi</ParaText>
                                                <ParaText size="1.3rem">2019</ParaText>
                                            </FlexContainer>
                                        </div>
                                    </FlexContainer>
                                </ProfileContainer>
                            </div>
                        </FlexContainer>
                    </PaddingContainer>
                </div>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default ProfileDsV