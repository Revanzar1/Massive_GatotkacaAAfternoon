import { AboutContainer, AboutDetails, AboutText } from "../../styles/About.styled"
import { BoldText, FlexContainer, PaddingContainer, ParaText } from "../../styles/Global.styled"

const AboutV = () => {
    return (
        <AboutContainer>
            <PaddingContainer top="2rem" left="2rem" right="2rem">
                <FlexContainer direction="column" gap="2rem">
                    <div>
                        <FlexContainer justify="space-between">
                            <BoldText size="2rem" color="#253763">About Us</BoldText>
                            <BoldText size="1.5rem" color="#253763">Settings / <BoldText color="#1E73BE">About Us</BoldText></BoldText>
                        </FlexContainer>
                    </div>
                    <div>
                        <AboutDetails>
                            <BoldText size="1.5rem" color="#253763">Tentang Kami</BoldText>
                            <AboutText>
                                <ParaText color="#253763">
                                    Kami adalah Gatotkaca A Afternoon, salah satu group massive Infinite Learning yang berencana untuk membuat sebuah proyek website  untuk mengubah sistem presensi STIE Bina Karya dari presensi manual (menggunakan tanda tangan) ke presensi digital (menggunakan input secara langsung ke website). Selain memudahkan dosen dalam presensi, kami juga membuat fitur lain yang dapat membantu dosen dalam melihat jadwal dan juga data mahasiswa yang kedepannya dapat membantu juga admin pada kampus. Tidak hanya dosen tapi mahasiswa/i juga dapat menggunakan website yang telah kami buat.
                                </ParaText>
                                <ParaText color="#253763">
                                    Proyek ini kami buat berdasarkan gagasan ide dari teman satu group kami yang berasal dari STIE Bina Karya, jurusan Bisnis Digital tentang permasalahan presensi di kampus mereka. Kami berupaya untuk mengubah sistem presensi ini agar permasalahan ini dapat ditangani secara digital.
                                </ParaText>
                            </AboutText>
                        </AboutDetails>
                    </div>
                </FlexContainer>
            </PaddingContainer>
        </AboutContainer>
    )
}

export default AboutV