import React from 'react'
import NFTImage from '../../assets/image/item/NFT-item.png';
import {
  LiveAuctionsContent,
  LiveAuctionsContentTitleBox,
  LiveAuctionsContentTitle,
  LiveAuctionsContentButton,
  LiveAuctionsContentCardItem,
  LiveAuctionsContentCard,
  LiveAuctionsContentItemDetail,
  LiveAuctionsContentSubTitle,
  LiveAuctionsContentTraining,
  LiveAuctionsContentPersonDetail,
  LiveAuctionsContentCurrent
} from './index.styled';

const NFTitem = 
  <div className='item'>
    <img src={NFTImage} alt={NFTImage}/>
    <LiveAuctionsContentItemDetail>
      <LiveAuctionsContentSubTitle>
        <span>Hamlet Contemplates Contemplates Contemplates Contemplates</span>
        <LiveAuctionsContentTraining>
          BSC
        </LiveAuctionsContentTraining>
      </LiveAuctionsContentSubTitle>
      <LiveAuctionsContentPersonDetail>
        <div className='name'>
          <div className='type'>
            Creator
          </div>
          <div className='name'>
            NULL
          </div>
        </div>
        <LiveAuctionsContentCurrent>
          <div className='currentBid'>
            Current Bid
          </div>
          <div className='priceTotal'>
            4.89 eTH
          </div>
        </LiveAuctionsContentCurrent>
      </LiveAuctionsContentPersonDetail>
    </LiveAuctionsContentItemDetail>
  </div>;

const LiveItems = Array.from({ length: 3 }, () => NFTitem);

export default function LiveAuctions() {
  return (
    <LiveAuctionsContent>
        <LiveAuctionsContentTitleBox>
          <LiveAuctionsContentTitle>
            Live Auctions
          </LiveAuctionsContentTitle>
          <LiveAuctionsContentButton>
            <button className="viewMore">View More</button>
          </LiveAuctionsContentButton>
        </LiveAuctionsContentTitleBox>
        <LiveAuctionsContentCardItem>
          {LiveItems.map((item, index) => (
            <LiveAuctionsContentCard key={index}> 
              {item} 

            </LiveAuctionsContentCard>
          ))}
        </LiveAuctionsContentCardItem>
      </LiveAuctionsContent>
  )
}
