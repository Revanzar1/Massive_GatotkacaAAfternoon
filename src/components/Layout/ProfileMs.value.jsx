import { BoldText, FlexContainer, PaddingContainer, ParaText } from "../../styles/Global.styled"
import { ProfileCardImg, ProfileContainer, ProfileLinks } from "../../styles/Profile.styled"
import CardImg from "../../assets/image3.svg"
import { NavLink } from "react-router-dom"

const ProfileMsV = () => {
    return (
        <PaddingContainer top="2rem">
            <FlexContainer direction="column">
                <div>
                    <PaddingContainer>
                        <FlexContainer justify="space-between">
                            <div>
                                <ProfileCardImg>
                                    <img src={CardImg} alt="img" />
                                    <BoldText size="1.5rem">Adrian Fahrozi</BoldText>
                                    <ParaText size="1.3rem" color="#253763">S1-Bisnis Digital</ParaText>
                                </ProfileCardImg>
                            </div>
                            <div>
                                <ProfileContainer>
                                    <ProfileLinks>
                                        <NavLink to="/mahasiswa/profile">Profile Details</NavLink>
                                        <NavLink to="/mahasiswa/edit-profile">Edit Profile</NavLink>
                                    </ProfileLinks>
                                    <FlexContainer gap="4rem">
                                        <div className="details">
                                            <FlexContainer direction="column" gap="1rem">
                                                <ParaText size="1.3rem">Nama Lengkap</ParaText>
                                                <ParaText size="1.3rem">NIM</ParaText>
                                                <ParaText size="1.3rem">Program Studi</ParaText>
                                                <ParaText size="1.3rem">Fakultas</ParaText>
                                                <ParaText size="1.3rem">Alamat</ParaText>
                                                <ParaText size="1.3rem">Agama</ParaText>
                                                <ParaText size="1.3rem">Email</ParaText>
                                                <ParaText size="1.3rem">Jenis Kelamin</ParaText>
                                                <ParaText size="1.3rem">No.Handphone</ParaText>
                                                <ParaText size="1.3rem">Status Mahasiswa</ParaText>
                                            </FlexContainer>
                                        </div>
                                        <div>
                                            <FlexContainer direction="column" gap="1rem" className="isi-details">
                                                <ParaText size="1.3rem">Adrian Fahrozi</ParaText>
                                                <ParaText size="1.3rem">21130012</ParaText>
                                                <ParaText size="1.3rem">Manajemen</ParaText>
                                                <ParaText size="1.3rem">Ekonomi</ParaText>
                                                <ParaText size="1.3rem">Jl. Bersamanya, Kota Tebing Tinggi</ParaText>
                                                <ParaText size="1.3rem">Islam</ParaText>
                                                <ParaText size="1.3rem">DrianFhrozy08@gmail.com</ParaText>
                                                <ParaText size="1.3rem">Laki-laki</ParaText>
                                                <ParaText size="1.3rem">085277680915</ParaText>
                                                <ParaText size="1.3rem">Aktif</ParaText>
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

export default ProfileMsV