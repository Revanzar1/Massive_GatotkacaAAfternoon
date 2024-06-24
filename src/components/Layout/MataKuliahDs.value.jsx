import { BoldText, FlexContainer, PaddingContainer, ParaText } from "../../styles/Global.styled"
import { SearchContainer, SearchBox, ProfileContainer, ProfileLinks, CourseContainer, CourseCard, CourseImage, CourseInfo, CourseDetails, CourseTitle, CourseLocation, CourseTime } from "../../styles/MataKuliahDs.styled"
import CardImg1 from "../../assets/matkul1.png"
import CardImg2 from "../../assets/matkul2.png"
import CardImg3 from "../../assets/matkul3.png"

const MataKuliahDsV = () => {
  const courses = [
    {
      id: 1,
      title: 'Manajemen Strategi',
      location: 'D/K3-2E',
      times: ['09:00 WIB', '11:00 WIB'],
      image: CardImg1,
    },
    {
      id: 2,
      title: 'Manajemen Resiko',
      location: 'A/K3-4G',
      times: ['11:00 WIB', '13:00 WIB'],
      image: CardImg2,
    },
    {
      id: 3,
      title: 'Riset Operasi',
      location: 'B/K3-2C',
      times: ['17:00 WIB', '19:00 WIB'],
      image: CardImg3,
    },
  ];

  return (
    <PaddingContainer top="2rem" bottom="2rem" left="2rem" right="2rem">
      <FlexContainer direction="column">
        <div>
          <FlexContainer justify="space-between">
            <BoldText size="2rem" color="#253763">Mata Kuliah</BoldText>
            <BoldText size="1.5rem" color="#253763"><BoldText color="#1E73BE">Mata Kuliah</BoldText></BoldText>
          </FlexContainer>
        </div>
        <div>
          <PaddingContainer top="2rem">
            <FlexContainer justify="space-between">
              <div>
                <CourseContainer>
                  {courses.map((course) => (
                    <CourseCard key={course.id}>
                      <CourseImage src={course.image} alt={course.title} />
                      <CourseInfo>
                        <CourseDetails>
                          <CourseTitle>SI Manajemen</CourseTitle>
                          <h3>{course.title}</h3>
                          <CourseLocation>📍{course.location}</CourseLocation>
                          {course.times.map((time, index) => (
                            <CourseTime key={index} color={index === 0 ? 'blue' : 'red'}>
                              {time}
                            </CourseTime>
                          ))}
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

export default MataKuliahDsV