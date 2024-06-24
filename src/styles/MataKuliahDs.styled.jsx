import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #fff;
    width: 400px;
    border-radius: 1rem;

`

export const ProfileLinks = styled.div`
    display: flex;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #E1E1E1;

    h2 {
      color: #253763;
    }
`

export const SearchContainer = styled.div`
  align-self: flex-end;
  text-align: right;
  margin-bottom: 0.5rem;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;

  input {
    border: none;
    outline: none;
    padding-left: 0.5rem;

    width: 300px;
    height: 50px;
    flex: 1;
  }

  button {
    padding-right: 0.5rem;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;

export const CourseContainer = styled.div`
  width: 750px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 0rem;

  .elses {
    vertical-align: middle;
    cursor: pointer;
    fill: #253763;
    width: 19px;
    height: 25px;
    flex-shrink: 0;

    &:hover{
        fill: #b9b9b9;
        transition: 0.2s ease-in-out;
    }
  } 
`;

export const CourseCard = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CourseImage = styled.img`
  width: 300px;
  height: 185px;

  border-radius: 5px;

  margin: 1.1rem 2rem 0 1.2rem;
  object-fit: cover;
`;

export const CourseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  flex: 1;
`;

export const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CourseTitle = styled.h2`
  color: #1e73be;
  margin: 0;
`;

export const CourseLocation = styled.div`
  display: flex;
  align-items: center;
  color: #253763;
  font-size: 1rem;
`;

export const CourseTime = styled.div`
  display: inline-block;
  background-color: ${props => (props.color === 'blue' ? '#1e73be' : 'red')};
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;