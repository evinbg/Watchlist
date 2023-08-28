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
  
  function ItemComponent() {
      return (
        <IT>
            {/* <ITImgContainer>
                <ITThumbnail src="" alt=""/>
            </ITImgContainer> */}
            <ITInfoContainer>
                <ITTitleElement>
                    <b>Title:</b><br/>&nbsp;
                    This is a Cool Show Title
                </ITTitleElement>
                <ITInfoFormatter>
                    <ITInfoElement>
                        <b>Episodes:</b><br/>&nbsp;
                        7 / 12
                    </ITInfoElement>
                    <ITInfoElement>
                        <b>Status:</b><br/>&nbsp;
                        Watching
                    </ITInfoElement>
                    <ITInfoElement>
                    <b>Score:</b><br/>&nbsp;
                        7 / 10
                    </ITInfoElement>
                </ITInfoFormatter>
                <ITButtons>
                    <ITEdit>
                        Edit
                    </ITEdit>
                    <ITDelete>
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