import React from 'react'
import NFTImage from '../../assets/image/item/NFT-item.png';
import {
  HotTitleBox,
  HotTitle,
  HotTitleButton,
  HotCardItem,
  HotCard,
  HotImgBox,
  HotItemDetail,
  HotSubTitle,
  HotTraining,
  HotPersonDetail,
  HotType,
  HotCurrentBid,
  HotButton,
} from './index.styled';

const hotNavbar = ['Music', 'Art', 'Sports', 'Virtual', 'Videos', 'More'];

const HotItem = 
  <div className='item'>
    <HotImgBox>
      <img src={NFTImage} alt={NFTImage}/>
      <button>Place A Bid</button>
    </HotImgBox>
    <HotItemDetail>
      <HotSubTitle>
        <span>Hamlet Contemplates Contemplates Contemplates Contemplates</span>
        <HotTraining>
          BSC
        </HotTraining>
      </HotSubTitle>
      <HotPersonDetail>
        <div className='name'>
          <HotType>
            Creator
          </HotType>
          <div className='name'>
            NULL
          </div>
        </div>
        <div className='current'>
          <HotCurrentBid>
            Current Bid
          </HotCurrentBid>
          <div className='priceTotal'>
            4.89 eTH
          </div>
        </div>
      </HotPersonDetail>
    </HotItemDetail>
  </div>;

const HotItems =  Array.from({ length: 6 }, () => HotItem);

export default function Hot() {
  return (
    <div className='hot'>
        <HotTitleBox>
          <HotTitle>
            Hot NFTs
          </HotTitle>
          <HotTitleButton>
            {hotNavbar.map((item, index) =>(
              <button className={item} key={index}>
                {item}
              </button>
            ))}
          </HotTitleButton>
        </HotTitleBox>
        <HotCardItem>
          {HotItems.map((item, index) => (
            <HotCard key={index}> 
              {item} 
            </HotCard>
          ))}
        </HotCardItem>
        <HotButton>
          <button className='viewMore'>View More</button>
        </HotButton>
      </div>
  )
}
