import SearchBar from '../components/SearchBar/SearchBar'
import {
  HomeContainer,
  HomeSlideshowContainer,
  HomeSlideshow,
  HomeHeader1,
  HomeHeader2,
  HomeSearchContainer
} from "./HomeElements";

function Home() {
  return (
    <HomeContainer>
      <HomeSlideshowContainer>
        <HomeSlideshow>
        </HomeSlideshow>
      </HomeSlideshowContainer>
        <HomeHeader1>
          This website is a WIP
        </HomeHeader1>
        <HomeHeader2>
          :)
        </HomeHeader2>
        <HomeSearchContainer>
          <SearchBar />
        </HomeSearchContainer>
    </HomeContainer>
  );
}

export default Home;