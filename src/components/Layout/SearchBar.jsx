import { SearchBarContainer } from "../../styles/SearchBar.styled"
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <input type="text" placeholder="Search..." />
      <FiSearch />
    </SearchBarContainer>
  )
}

export default SearchBar