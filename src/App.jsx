import { Route, Routes } from "react-router-dom"
import { Container } from "./styles/Global.styled"
import Home from "./pages/Home"
import Login from "./pages/Login"
import DashboardDs from "./pages/DashboardDs"
import DashboardMs from "./pages/DashboardMs"
import Pengumuman from "./pages/Pengumuman"
import MataKuliahMs from "./pages/MataKuliahMs"
import SettingsMs from "./pages/SettingsMs"
import EditProfileMs from "./pages/EditProfileMs"
import Help from "./pages/Help"
import About from "./pages/About"
import MataKuliahDs from "./pages/MataKuliahDs"
import Mahasiswa from "./pages/Mahasiswa"
import ProfileDs from "./pages/ProfileDs"
import ProfileMs from "./pages/ProfileMs"
import EditProfileDs from "./pages/EditProfileDs"
import Presensi from "./pages/Presensi"
import SettingsDs from "./pages/SettingsDs"
import GantiPasswordDs from "./pages/GantiPasswordDs"
import GantiPasswordMs from "./pages/GantiPasswordMs"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Container direction="column">
        <Routes>
          <Route path="/dosen/dashboard" element={<DashboardDs />} />
          <Route path="/mahasiswa/dashboard" element={<DashboardMs />} />
          <Route path="/pengumuman" element={<Pengumuman />} />
          <Route path="/mahasiswa/matakuliah" element={<MataKuliahMs />} />
          <Route path="/dosen/matakuliah" element={<MataKuliahDs />} />
          <Route path="/dosen/mahasiswa" element={<Mahasiswa />} />
          <Route path="/mahasiswa/profile" element={<ProfileMs />} />
          <Route path="/dosen/profile" element={<ProfileDs />} />
          <Route path="/mahasiswa/settings" element={<SettingsMs />} />
          <Route path="/dosen/settings" element={<SettingsDs />} />
          <Route path="/mahasiswa/edit-profile" element={<EditProfileMs />} />
          <Route path="/dosen/edit-profile" element={<EditProfileDs />} />
          <Route path="/presensi" element={<Presensi />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="/dosen/ganti-password" element={<GantiPasswordDs />} />
          <Route path="/mahasiswa/ganti-password" element={<GantiPasswordMs />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App