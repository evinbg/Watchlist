import ItemComponent from '../components/ItemComponent/ItemComponent';
import {
  WatchlistContainer,
  WatchlistHeader,
  WatchlistObjectContainer,
  WatchlistBottomMargin
} from "./WatchlistElements";

function Watchlist() {
    return (
      <WatchlistContainer>
          <WatchlistHeader>
            Watchlist
          </WatchlistHeader>
          <WatchlistObjectContainer>
            <ItemComponent />
            <ItemComponent />
            <ItemComponent />
          </WatchlistObjectContainer>
          <WatchlistBottomMargin>
          </WatchlistBottomMargin>
      </WatchlistContainer>
    );
  }
  
  export default Watchlist;