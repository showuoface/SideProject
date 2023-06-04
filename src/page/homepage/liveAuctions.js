import React from 'react'
import NFTImage from '../../assets/image/item/NFT-item.png';

const NFTitem = 
  <div className='item'>
    <img src={NFTImage} alt={NFTImage}/>
    <div className='itemDetail'>
      <div className='subTitle'>
        <span>Hamlet Contemplates Contemplates Contemplates Contemplates</span>
        <div className='training'>
          BSC
        </div>
      </div>
      <div className='personDetail'>
        <div className='name'>
          <div className='type'>
            Creator
          </div>
          <div className='name'>
            NULL
          </div>
        </div>
        <div className='current'>
          <div className='currentBid'>
            Current Bid
          </div>
          <div className='priceTotal'>
            4.89 eTH
          </div>
        </div>
      </div>
    </div>
  </div>;

const LiveItems = Array.from({ length: 3 }, () => NFTitem);

export default function LiveAuctions() {
  return (
    <div className='liveAuctions'>
        <div className='title-box'>
          <div className='title'>
            Live Auctions
          </div>
          <div className='button'>
            <button className='viewMore'>View More</button>
          </div>
        </div>
        <div className='cardItem'>
          {LiveItems.map((item, index) => (
            <div className="card" key={index}> 
              {item} 

            </div>
          ))}
        </div>
      </div>
  )
}
