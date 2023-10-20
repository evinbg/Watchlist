import { useState, useEffect } from 'react';
import ItemComponent from '../components/ItemComponent/ItemComponent';
import {
  WatchlistContainer,
  WatchlistHeader,
  WatchlistObjectContainer,
  WatchlistBottomMargin
} from "./WatchlistElements";
import axios from '../axios';

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/watchlist');
      setWatchlist(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(watchlist);


    return (
      <WatchlistContainer>
          <WatchlistHeader>
            Watchlist
          </WatchlistHeader>
          <WatchlistObjectContainer>
          {
            watchlist?.map((item) => {
              console.log(item._id);
              return (
              <ItemComponent key={item._id} watchlistData={item} fetchData={fetchData}></ItemComponent>
              );
            })
          }
          </WatchlistObjectContainer>
          <WatchlistBottomMargin>
          </WatchlistBottomMargin>
      </WatchlistContainer>
    );
  }
  
  export default Watchlist;