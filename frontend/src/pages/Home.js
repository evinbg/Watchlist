import { useState, useEffect } from 'react';
import Entry from '../components/Entry/Entry'
import {
  HomeContainer,
  HomeHeader1
} from "./HomeElements";
import axios from '../axios';

function Home() {

  const [input, setInput] = useState({
    title: "",
    episodeOn: "",
    episodeTotal: "",
    status: "",
    score: ""
  });

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

  const addWatchlist = async (e) => {
    e.preventDefault();
    if (input.title.length === 0 || input.episodeOn.length === 0 || input.episodeTotal.length === 0) {
      return null;
    }
    await axios.post('/watchlist', [{
      ...watchlist,
      title: input.title,
      episodeOn: input.episodeOn,
      episodeTotal: input.episodeTotal,
      status: input.status,
      score: input.score
    }])
    fetchData();
    setInput('');
  }

  return (
    <HomeContainer>
        <HomeHeader1>
          Add to your watchlist
        </HomeHeader1>
        <Entry input={input} setInput={setInput} addWatchlist={addWatchlist}/>
    </HomeContainer>
  );
}

export default Home;