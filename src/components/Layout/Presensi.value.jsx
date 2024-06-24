import { BoldText, FlexContainer, PaddingContainer, ParaText } from "../../styles/Global.styled"
import {
  SearchContainer, SearchBox, ProfileContainer, ProfileLinks,
  CourseContainer,
  CourseCard,
  CourseInfo,
  CourseDetails,
  CourseTitle,
  CourseLocation,
  CourseButton, CourseDay
} from "../../styles/Presensi.styled"

const PresensiV = () => {
  const courses = [
    {
      id: 1,
      title: 'Manajemen Strategi',
      location: 'D/K3-2E',
      day: 'Senin',
      type: 'Teori',
      times: '09:00 - 11:00',
      sks: '3',
      buttons: ['Mulai Presensi', 'Rekap Presensi'],
    },
    {
      id: 2,
      title: 'Manajemen Resiko',
      location: 'A/K3-4G',
      day: 'Selasa',
      type: 'Teori',
      times: '11:00 - 13:00',
      sks: '3',
      buttons: ['Mulai Presensi', 'Rekap Presensi'],
    },
    {
      id: 3,
      title: 'Riset Operasi',
      location: 'B/K3-2C',
      day: 'Rabu',
      type: 'Teori',
      times: '17:00 - 19:00',
      sks: '3',
      buttons: ['Mulai Presensi', 'Rekap Presensi'],
    },
  ];

  return (
    <PaddingContainer top="2rem" bottom="2rem" left="2rem" right="2rem">
      <FlexContainer direction="column">
        <div>
          <FlexContainer justify="space-between">
            <BoldText size="2rem" color="#253763">Presensi</BoldText>
            <BoldText size="1.5rem" color="#253763"><BoldText color="#1E73BE">Presensi</BoldText></BoldText>
          </FlexContainer>
        </div>
        <div>
          <PaddingContainer top="2rem">
            <FlexContainer justify="space-between">
              <div>
                <CourseContainer>
                  {courses.map((course) => (
                    <CourseCard key={course.id}>
                      <CourseInfo>
                        <CourseDetails>
                          <div className="subtitle">
                            <CourseTitle>SI Manajemen</CourseTitle>
                            <h2>{course.title}</h2>
                          </div>
                          <div className="double">
                            <CourseDay>Hari : {course.day}</CourseDay><CourseLocation>📍 {course.location}</CourseLocation>
                          </div>
                          <div className="etc">
                            <CourseDay>Tipe : {course.type}</CourseDay>
                            <CourseDay>Waktu : {course.times}</CourseDay>
                            <CourseDay>SKS : {course.sks}</CourseDay>
                          </div>
                          <div className="btn">
                            {course.buttons.map((button, index) => (
                              <CourseButton key={index} color={index === 0 ? 'blue' : 'red'}>
                                {button}
                              </CourseButton>
                            ))}
                          </div>
                        </CourseDetails>
                        <div className="else">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19"
                              height="5"
                              viewBox="0 0 19 5"
                              className="elses">
                              <rect width="5" height="5" rx="5" fill="#" />
                              <rect x="7" width="5" height="5" rx="5" fill="#" />
                              <rect x="14" width="5" height="5" rx="5" fill="#" />
                            </svg>
                          </span>
                        </div>
                      </CourseInfo>
                    </CourseCard>
                  ))}
                </CourseContainer>
              </div>
              <div>
                <ProfileContainer>
                  <ProfileLinks>
                    <ParaText><h2>Cari Mata Kuliah</h2></ParaText>
                  </ProfileLinks>
                  <SearchContainer>
                    <SearchBox>
                      <input type="text" placeholder="Search.." />
                      <button>🔍</button>
                    </SearchBox>
                  </SearchContainer>
                </ProfileContainer>
              </div>
            </FlexContainer>
          </PaddingContainer>
        </div>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default PresensiV