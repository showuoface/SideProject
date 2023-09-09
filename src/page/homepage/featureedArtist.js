import React from 'react'
import NFTImage from '../../assets/image/item/NFT-item.png';
import {
  FeaturedArtistContent,
  FeaturedArtistTitleBox,
  FeaturedArtistTitle,
  FeaturedArtistButton,
  FeaturedArtistCardItem,
  FeaturedArtistCard,
  FeaturedArtistItem,
  FeaturedArtistImgBox,
  FeaturedArtistPresonImg,
  FeaturedArtistitemDetail
} from './index.styled';

const FeaturedItem = 
  <FeaturedArtistItem>
    <FeaturedArtistImgBox>
      <img src={NFTImage} alt={NFTImage}/>
      <FeaturedArtistPresonImg>
        <img src={NFTImage} alt={NFTImage}/>
      </FeaturedArtistPresonImg>
    </FeaturedArtistImgBox>
    <FeaturedArtistitemDetail>
      <div className='title'>
        <span className='name'>CryptoPunks</span>
        <div className='price'>
          818.7K
        </div>
      </div>
    </FeaturedArtistitemDetail>
  </FeaturedArtistItem>;

const FeaturedItems = Array.from({ length: 4 }, () => FeaturedItem);

export default function FeatureedArtist() {
  return (
    <FeaturedArtistContent>
        <FeaturedArtistTitleBox>
            <FeaturedArtistTitle>
                Featured Artist
            </FeaturedArtistTitle>
            <FeaturedArtistButton>
                <button className='viewMore'>View More</button>
            </FeaturedArtistButton>
        </FeaturedArtistTitleBox>
        <FeaturedArtistCardItem>
            {FeaturedItems.map((item, index) => (
                <FeaturedArtistCard key={index}> 
                    {item} 
                </FeaturedArtistCard>
            ))}
        </FeaturedArtistCardItem>
    </FeaturedArtistContent>
  )
}
