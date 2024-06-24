import { Link } from "react-router-dom"
import { FlexContainer, PaddingContainer } from "../styles/Global.styled"
import { SettingsContainer } from "../styles/SettingsMs"
import { HiMiniChevronRight } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlineKey } from "react-icons/hi2";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";

const SettingsComponentsDs = () => {
    return (
        <PaddingContainer>
            <FlexContainer direction="column" gap="2rem">
                <div>
                    <SettingsContainer>
                        <Link to="/dosen/edit-profile"><span><HiOutlineUserCircle />Edit Profile</span><HiMiniChevronRight /></Link>
                        <Link to="/dosen/ganti-password"><span><HiOutlineKey />Ganti Password</span><HiMiniChevronRight /></Link>
                        <Link to="/help"><span><HiOutlineShieldCheck />Help?</span><HiMiniChevronRight /></Link>
                        <Link to="/about"><span><HiOutlineUserGroup />About Us</span><HiMiniChevronRight /></Link>
                    </SettingsContainer>
                </div>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default SettingsComponentsDs