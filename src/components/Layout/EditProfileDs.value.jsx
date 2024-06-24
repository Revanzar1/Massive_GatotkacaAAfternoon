import { BoldText, FlexContainer, PaddingContainer, ParaText } from "../../styles/Global.styled"
import { ChangeImage, ProfileCardImg, ProfileContainer, ProfileLinks } from "../../styles/EditProfile.styled"
import CardImg from "../../assets/image4.jpeg"
import { NavLink } from "react-router-dom"

const EditProfileDsV = () => {
    return (
        <PaddingContainer top="2rem" bottom="2rem" left="2rem" right="2rem">
            <FlexContainer direction="column">
                <div>
                    <FlexContainer justify="space-between">
                        <BoldText size="2rem" color="#253763">Profile</BoldText>
                        <BoldText size="1.5rem" color="#253763">Settings / <BoldText color="#1E73BE">Edit Profile</BoldText></BoldText>
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
                                    <ChangeImage>
                                        <ParaText>Gambar Profile</ParaText>
                                        <div>
                                            <img src={CardImg} alt="" />
                                            <input type="file" accept="image/*" />
                                        </div>
                                    </ChangeImage>
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
                                            <FlexContainer direction="column" gap="1.3rem" className="isi-details">
                                                <input type="text" />
                                                <input type="text" />
                                                <input type="text" />
                                                <input type="text" />
                                                <input type="text" />
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

export default EditProfileDsV