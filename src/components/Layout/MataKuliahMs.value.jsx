import { BoldText, FlexContainer, PaddingContainer, ParaText } from "../../styles/Global.styled"
import { MataKuliahContainer } from "../../styles/MataKuliahMs.styled"

const MataKuliahMsV = () => {
  return (
    <PaddingContainer top="2rem">
      <FlexContainer justify="space-between">
        <BoldText size="2rem" color="#253763">Jadwal Mata Kuliah</BoldText>
        <div>
          <FlexContainer direction="column">
            <PaddingContainer>
              <FlexContainer direction="column" gap="5px">
                <label htmlFor="">Semester</label>
                <select name="" id="">
                  <option value="0">6</option>
                  <option value="0">5</option>
                  <option value="0">4</option>
                  <option value="0">3</option>
                  <option value="0">2</option>
                  <option value="0">1</option>
                </select>
              </FlexContainer>
            </PaddingContainer>
            <PaddingContainer top="1rem">
              <FlexContainer direction="column" gap="5px">
                <label htmlFor="">Kelas</label>
                <select name="" id="">
                  <option value="0">S1-Bisnis Digital</option>
                  <option value="0">S1-Bisnis Terapan</option>
                  <option value="0">S1-Bisnis  Syariah</option>
                </select>
              </FlexContainer>
            </PaddingContainer>
          </FlexContainer>
        </div>
      </FlexContainer>
      <MataKuliahContainer>
        <section>
          <FlexContainer direction="column">
            <ParaText color="#253763">S1-Bisnis Digital</ParaText>
            <ParaText>Semester 6</ParaText>
          </FlexContainer>
          <FlexContainer>
            ...
          </FlexContainer>
        </section>
        <table>
          <tr>
            <th>Hari</th>
            <th>SKS</th>
            <th>Ruangan</th>
            <th>Waktu</th>
            <th>Mata Kuliah</th>
          </tr>
          <tr>
            <td>Senin</td>
            <td>4</td>
            <td>Kelas BD. Ruang K3-4G</td>
            <td>09.00-11.00</td>
            <td>Media Social & Web</td>
          </tr>
          <tr>
            <td>Selasa</td>
            <td>3</td>
            <td>Kelas BD. Ruang K3-4G</td>
            <td>09.00-11.00</td>
            <td>Media Social & Web</td>
          </tr>
          <tr>
            <td>Rabu</td>
            <td>4</td>
            <td>Kelas BD. Ruang K3-4G</td>
            <td>09.00-11.00</td>
            <td>Media Social & Web</td>
          </tr>
          <tr>
            <td>Kamis</td>
            <td>4</td>
            <td>Kelas BD. Ruang K3-4G</td>
            <td>09.00-11.00</td>
            <td>Media Social & Web</td>
          </tr>
          <tr>
            <td>Jumat</td>
            <td>4</td>
            <td>Kelas BD. Ruang K3-4G</td>
            <td>09.00-11.00</td>
            <td>Media Social & Web</td>
          </tr>
        </table>
      </MataKuliahContainer>
    </PaddingContainer>
  )
}

export default MataKuliahMsV