import {
    IT,
    ITImgContainer,
    ITThumbnail,
    ITInfoContainer,
    ITInfoElement,
    ITTitleElement,
    ITInfoFormatter,
    ITDateContainer,
    ITDate,
    ITButtons,
    ITEdit,
    ITDelete
  } from "./ItemComponentElements";
  import axios from '../../axios';
  
  function ItemComponent(watchlistData, {fetchData}) {
    
    const updateTitle = async (id) => {
        try {
            const response = await axios.put(`/watchlist/${id}`, {id});
            window.location.reload();
            return response.data.json
        } catch (err) {
            console.error(err.message);
        }
    }
    

    const deleteItem = async (id) => {
        try {
            const response = await axios.delete(`/watchlist/${id}`, {id});
            window.location.reload();
            return response.data.json
        } catch (err) {
            console.error(err.message);
        }
    }

      return (
        <IT>
            {/* <ITImgContainer>
                <ITThumbnail src="" alt=""/>
            </ITImgContainer> */}
            <ITInfoContainer>
                <ITTitleElement>
                    <b>Title:</b><br/>&nbsp;
                    {watchlistData.watchlistData.title}
                </ITTitleElement>
                <ITInfoFormatter>
                    <ITInfoElement>
                        <b>Episodes:</b><br/>&nbsp;
                        {watchlistData.watchlistData.episodeOn} / {watchlistData.watchlistData.episodeTotal}
                    </ITInfoElement>
                    <ITInfoElement>
                        <b>Status:</b><br/>&nbsp;
                        {watchlistData.watchlistData.status}
                    </ITInfoElement>
                    <ITInfoElement>
                    <b>Score:</b><br/>&nbsp;
                        {watchlistData.watchlistData.score} / 10
                    </ITInfoElement>
                </ITInfoFormatter>
                <ITButtons>
                    <ITEdit onClick={() => updateTitle(watchlistData.watchlistData._id)}>
                        Edit
                    </ITEdit>
                    <ITDelete onClick={() => deleteItem(watchlistData.watchlistData._id)}>
                        Delete
                    </ITDelete>
                </ITButtons>
            </ITInfoContainer>
            <ITDateContainer>
                <b>Date Created:</b>
                <ITDate>
                    08/28/2022
                </ITDate>
            </ITDateContainer>
        </IT>
      );
    }
    
    export default ItemComponent;