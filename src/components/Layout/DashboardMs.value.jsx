import { JadwalContainer, MotivasiContainer, MotivasiText, NotifContainer, NotifImg, NotifText } from "../../styles/DashboardMs.styled"
import { BoldText, FlexContainer, ParaText } from "../../styles/Global.styled"
import NotifShape from "../../assets/Robotics.svg"
import MotivasiShape from "../../assets/image12.svg"

const DashboardMsV = () => {
    return (
        <FlexContainer direction="column" gap="2rem">
            <NotifContainer>
                <div>
                    <NotifText>
                        <ParaText size="1.3rem" color="#fff">Halo Adrian 👋</ParaText>
                        <ParaText size="1.3rem" color="#fff">Selamat datang di Dashboard mahasiswa STIE Bina Karya</ParaText>
                        <ParaText size="1.3rem" color="#fff">Apa yang ingin anda lakukan hari ini?</ParaText>
                    </NotifText>
                </div>
                <div>
                    <NotifImg>
                        <img src={NotifShape} alt="Image" />
                    </NotifImg>
                </div>
            </NotifContainer>
            <MotivasiContainer>
                <MotivasiText>
                    <div>
                        <ParaText size="1.3rem" className="motivasi-text">
                            “Keberhasilan bukanlah milik orang pintar. Namun keberhasilan itu adalah milik mereka yang senantiasa berusaha.”
                        </ParaText>
                    </div>
                    <div>
                        <BoldText size="1.3rem">BJ. Habibie</BoldText>
                    </div>
                </MotivasiText>
                <img src={MotivasiShape} alt="" />
            </MotivasiContainer>
            <JadwalContainer>
                <BoldText size="1.5rem" color="#253763">Jadwal Mata Kuliah (Kamis)</BoldText>
                <FlexContainer justify="space-between">
                    <div>
                        <p>Metodologi Penelitian</p>
                        <p>Pengembangan Aplikasi Mobile</p>
                    </div>
                    <div>
                        <p>09.00 - 11.00</p>
                        <p>09.00 - 11.00</p>
                    </div>
                    <div>
                        <p>BD/K3-4G</p>
                        <p>BD/K3-4G</p>
                    </div>
                </FlexContainer>
            </JadwalContainer>
        </FlexContainer>
    )
}

export default DashboardMsV