import { BoldText, FlexContainer, PaddingContainer, ParaText } from "../../styles/Global.styled"
import { MataKuliahContainer, ProfileContainer, ButtonSubmit, ButtonContainer, StudentCount } from "../../styles/Mahasiswa.styled"

const MahasiswaV = () => {
    return (
        <PaddingContainer top="2rem" bottom="2rem" left="2rem" right="2rem">
            <FlexContainer direction="column">
                <div>
                    <FlexContainer justify="space-between">
                        <BoldText size="2rem" color="#253763">Mahasiswa</BoldText>
                        <BoldText size="1.5rem" color="#253763">
                            <BoldText color="#1E73BE">Mahasiswa</BoldText>
                        </BoldText>
                    </FlexContainer>
                </div>
                <div>
                    <MataKuliahContainer>
                        <section>
                            <ProfileContainer>
                                <FlexContainer gap="8rem">
                                    <div className="details">
                                        <FlexContainer direction="column" gap="1rem">
                                            <ParaText size="1.5rem">NIM</ParaText>
                                            <ParaText size="1.5rem">Nama</ParaText>
                                            <ParaText size="1.5rem">Status</ParaText>
                                        </FlexContainer>
                                    </div>
                                    <div>
                                        <FlexContainer direction="column" gap="1.3rem" className="isi-details">
                                            <input type="text" />
                                            <input type="text" />
                                            <input type="text" />
                                        </FlexContainer>
                                    </div>
                                </FlexContainer>
                            </ProfileContainer>
                        </section>
                        <ButtonContainer>
                            <ButtonSubmit className="new">Tambah</ButtonSubmit>
                            <ButtonSubmit className="del">Hapus</ButtonSubmit>
                        </ButtonContainer>
                        <StudentCount>Jumlah: 37 Mahasiswa</StudentCount>
                        <table>
                            <tr className="first">
                                <th className="nomor">NO</th>
                                <th className="nim">NIM</th>
                                <th className="nama">Nama</th>
                                <th className="status">Status</th>
                            </tr>
                            <tr>
                                <td className="nomor">1</td>
                                <td className="nim">21130010</td>
                                <td className="nama">Adryan</td>
                                <td className="status">Aktif</td>
                            </tr>
                            <tr>
                                <td className="nomor">2</td>
                                <td className="nim">21130011</td>
                                <td className="nama">Adit</td>
                                <td className="status">Aktif</td>
                            </tr>
                            <tr>
                                <td className="nomor">3</td>
                                <td className="nim">21130012</td>
                                <td className="nama">Centika</td>
                                <td className="status">Aktif</td>
                            </tr>
                            <tr>
                                <td className="nomor">4</td>
                                <td className="nim">21130013</td>
                                <td className="nama">fitri</td>
                                <td className="status">Aktif</td>
                            </tr>
                            <tr>
                                <td className="nomor">5</td>
                                <td className="nim">21130014</td>
                                <td className="nama">Ipun</td>
                                <td className="status">Aktif</td>
                            </tr>
                            <tr>
                                <td className="nomor">6</td>
                                <td className="nim">21130015</td>
                                <td className="nama">Mamat</td>
                                <td className="status">Aktif</td>
                            </tr>
                        </table>
                    </MataKuliahContainer>
                </div>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default MahasiswaV