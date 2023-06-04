import React from 'react'
import NFTImage from '../../assets/image/item/NFT-item.png';

const FeaturedItem = 
  <div className='item'>
    <div className='imgBox'>
      <img src={NFTImage} alt={NFTImage}/>
      <div className='presonImg'>
        <img src={NFTImage} alt={NFTImage}/>
      </div>
    </div>
    <div className='itemDetail'>
      <div className='title'>
        <span className='name'>CryptoPunks</span>
        <div className='price'>
          818.7K
        </div>
      </div>
    </div>
  </div>;

const FeaturedItems = Array.from({ length: 4 }, () => FeaturedItem);

export default function FeatureedArtist() {
  return (
    <div className='featuredArtist'>
        <div className='title-box'>
            <div className='title'>
                Featured Artist
            </div>
            <div className='button'>
                <button className='viewMore'>View More</button>
            </div>
        </div>
        <div className='cardItem'>
            {FeaturedItems.map((item, index) => (
                <div className="card" key={index}> 
                    {item} 
                </div>
            ))}
        </div>
    </div>
  )
}
