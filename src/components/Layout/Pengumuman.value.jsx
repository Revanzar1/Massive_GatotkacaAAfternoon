import { BoldText, FlexContainer, PaddingContainer, ParaText } from "../../styles/Global.styled"
import { PengumumanContainer } from "../../styles/Pengumuman.styled"

const PengumumanV = () => {
    return (
        <PaddingContainer top="2rem">
            <FlexContainer direction="column">
                <BoldText size="2rem" color="#253763">Pengumuman Universitas</BoldText>
                <PengumumanContainer>
                    <div>
                        <FlexContainer direction="column">
                            <BoldText color="#253763" size="1.4rem">Edaran Pembayaran Uang Kuliah</BoldText>
                            <ParaText>Kamis, 6 mei 2024</ParaText>
                        </FlexContainer>
                    </div>
                    <div>
                        <FlexContainer direction="column">
                            <BoldText size="1.4rem" color="#253763">Tata Cara Pengiriman Dokumen Resmi ke Kampus</BoldText>
                            <ParaText>Kamis, 8 mei 2024</ParaText>
                        </FlexContainer>
                    </div>
                </PengumumanContainer>
                <BoldText size="2rem" color="#253763">Pengumuman Program</BoldText>
                <PengumumanContainer>
                    <div>
                        <FlexContainer direction="column">
                            <BoldText color="#253763" size="1.4rem">Pelaksanaan Ujian Tengah Semester 2024 Tahap I</BoldText>
                            <ParaText>Kamis, 10 juni 2024</ParaText>
                        </FlexContainer>
                    </div>
                    <div>
                        <FlexContainer direction="column">
                            <BoldText size="1.4rem" color="#253763">Edaran Pembayaran Uang Kuliah 2024 Tahap I</BoldText>
                            <ParaText>Kamis, 11 juni 2024</ParaText>
                        </FlexContainer>
                    </div>
                    <div>
                        <FlexContainer direction="column">
                            <BoldText size="1.4rem" color="#253763">Jadwal Pelaksanaan Ujian Susulan Tahap I</BoldText>
                            <ParaText>Kamis, 15 juni 2024</ParaText>
                        </FlexContainer>
                    </div>
                    <div>
                        <FlexContainer direction="column">
                            <BoldText size="1.4rem" color="#253763">Jadwal Pelaksanaan Remedial Tahap I</BoldText>
                            <ParaText>Kamis, 17 juni 2024</ParaText>
                        </FlexContainer>
                    </div>
                    <div>
                        <FlexContainer direction="column">
                            <BoldText size="1.4rem" color="#253763">Jadwal Penyusunan KRS 2025 Tahap II</BoldText>
                            <ParaText>Kamis, 19 juni 2024</ParaText>
                        </FlexContainer>
                    </div>
                    <div>
                        <FlexContainer direction="column">
                            <BoldText size="1.4rem" color="#253763">Jadwal Pengumuman Sempro Semester VIII</BoldText>
                        </FlexContainer>
                    </div>
                </PengumumanContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default PengumumanV