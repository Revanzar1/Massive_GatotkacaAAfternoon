import { Link, NavLink } from "react-router-dom"
import { BoldText, FlexContainer } from "../styles/Global.styled"
import { SideLink, SideLogo, SidebarContainer, SidebarWrap } from "../styles/Sidebar.styled"
import { HiOutlineClock, HiOutlineUserGroup, HiOutlineAcademicCap, HiOutlineClipboardDocumentList, HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineArrowLeftOnRectangle, HiOutlineExclamationCircle } from "react-icons/hi2";

const SidebarDs = () => {
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
                        <NavLink to="/dosen/dashboard"><HiOutlineClock />Dashboard</NavLink>
                        <NavLink to="/dosen/matakuliah"><HiOutlineClipboardDocumentList />Mata Kuliah</NavLink>
                        <NavLink to="/dosen/mahasiswa"><HiOutlineUserGroup />Mahasiswa</NavLink>
                        <NavLink to="/dosen/profile"><HiOutlineAcademicCap />Profile</NavLink>
                        <NavLink to="/presensi"><HiOutlineCalendarDays />Presensi</NavLink>
                        <Link to="/"><HiOutlineArrowLeftOnRectangle />Logout</Link>
                    </SideLink>
                </FlexContainer>
                <FlexContainer
                    direction="column"
                    align="center"
                >
                    <SideLink>
                        <NavLink to="/dosen/settings"><HiOutlineCog6Tooth />Settings</NavLink>
                        <NavLink to="/help"><HiOutlineExclamationCircle />Help</NavLink>
                    </SideLink>
                </FlexContainer>
            </SidebarWrap>
        </SidebarContainer>
    )
}

export default SidebarDs