import Entry from '../components/Entry/Entry'
import {
  HomeContainer,
  HomeHeader1
} from "./HomeElements";

function Home() {
  return (
    <HomeContainer>
        <HomeHeader1>
          Add to your watchlist
        </HomeHeader1>
        <Entry />
    </HomeContainer>
  );
}

export default Home;