import { Link, NavLink } from "react-router-dom"
import { BoldText, FlexContainer } from "../styles/Global.styled"
import { SideLink, SideLogo, SidebarContainer, SidebarWrap } from "../styles/Sidebar.styled"
import { HiOutlineClock, HiOutlineMegaphone, HiOutlineClipboardDocumentList, HiOutlineUser, HiOutlineCog6Tooth, HiOutlineArrowLeftOnRectangle, HiOutlineExclamationCircle } from "react-icons/hi2";

const SidebarMS = () => {
    return (
        <SidebarContainer>
            <SidebarWrap>
                <FlexContainer
                    direction="column"
                    align="center"
                >
                    <SideLogo>
                        <BoldText color="#fff" size="1.5rem">Webpress</BoldText>
                    </SideLogo>
                    <SideLink>
                        <NavLink to="/mahasiswa/dashboard"><HiOutlineClock />Dashboard</NavLink>
                        <NavLink to="/pengumuman"><HiOutlineMegaphone />Pengumuman</NavLink>
                        <NavLink to="/mahasiswa/matakuliah"><HiOutlineClipboardDocumentList />Mata Kuliah</NavLink>
                        <NavLink to="/mahasiswa/profile"><HiOutlineUser />Profile</NavLink>
                        <Link to="/"><HiOutlineArrowLeftOnRectangle />Logout</Link>
                    </SideLink>
                </FlexContainer>
                <FlexContainer
                    direction="column"
                    align="center"
                >
                    <SideLink>
                        <NavLink to="/mahasiswa/settings"><HiOutlineCog6Tooth />Settings</NavLink>
                        <NavLink to="/help"><HiOutlineExclamationCircle />Help</NavLink>
                    </SideLink>
                </FlexContainer>
            </SidebarWrap>
        </SidebarContainer>
    )
}

export default SidebarMS