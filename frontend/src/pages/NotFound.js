import {
  NF,
  NFHeader1,
  NFHeader2
} from './NotFoundElements';

function NotFound() {
    return (
      <NF>
        <NFHeader1>
          404
        </NFHeader1>
        <NFHeader2>
          Page not found
        </NFHeader2>
      </NF>
    );
  }
  
  export default NotFound;