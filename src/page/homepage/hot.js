import React from 'react'
import NFTImage from '../../assets/image/item/NFT-item.png';

const hotNavbar = ['Music', 'Art', 'Sports', 'Virtual', 'Videos', 'More'];

const HotItem = 
  <div className='item'>
    <div className='imgBox'>
      <img src={NFTImage} alt={NFTImage}/>
      <button>Place A Bid</button>
    </div>
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

const HotItems =  Array.from({ length: 6 }, () => HotItem);

export default function Hot() {
  return (
    <div className='hot'>
        <div className='title-box'>
          <div className='title'>
            Hot NFTs
          </div>
          <div className='button'>
            {hotNavbar.map((item, index) =>(
              <button className={item} key={index}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className='cardItem'>
          {HotItems.map((item, index) => (
            <div className="card" key={index}> 
              {item} 
            </div>
          ))}
        </div>
        <div className='button'>
          <button className='viewMore'>View More</button>
        </div>
      </div>
  )
}
