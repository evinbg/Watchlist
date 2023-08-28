import { FaSearch } from "react-icons/fa";
import {
    Search,
    SearchLabel,
    SearchContainer,
    SearchInput,
    SearchButton
} from "./SearchBarElements";

function SearchBar() {

    return (
        <Search>
            {/* <SearchLabel>Enter a URL:</SearchLabel> */}
            <SearchContainer>
                <SearchInput type="text" placeholder="Something goes here..."></SearchInput>
                <SearchButton>
                    <FaSearch />
                </SearchButton>
            </SearchContainer>
        </Search>
    );
}
  
export default SearchBar;