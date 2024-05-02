import React from 'react';
import NFTImage from '../../assets/image/item/NFT-item.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { 
  MainBannerContent,
  TitleBox,
  Title,
  SubTitle,
  Button,
  SwiperContainer,
  ItemDetail,
  ItemSubTitle,
  ItemSpan,
  Training,
  PersonDetail,
  ItemType,
  CurrentBid,
  ItemImg
} from './index.styled';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination, EffectCoverflow } from 'swiper/modules';

const NFTitem = 
  <div className='item'>
    <ItemImg src={NFTImage} alt={NFTImage}/>
    <ItemDetail>
      <ItemSubTitle>
        <ItemSpan>Hamlet Contemplates Contemplates Contemplates Contemplates</ItemSpan>
        <Training>
          BSC
        </Training>
      </ItemSubTitle>
      <PersonDetail>
        <div className='name'>
          <ItemType>
            Creator
          </ItemType>
          <div className='name'>
            NULL
          </div>
        </div>
        <div className='current'>
          <CurrentBid>
            Current Bid
          </CurrentBid>
          <div className='priceTotal'>
            4.89 eTH
          </div>
        </div>
      </PersonDetail>
    </ItemDetail>
  </div>;

const NFTitems = Array.from({ length: 5 }, () => NFTitem);

function MainBanner() {
    return (
      <MainBannerContent>
        <TitleBox>
          <Title>
              Discover a New Era of Crypto Currency
          </Title>
          <SubTitle>
              Panda NFT is the primier marketplace for NFT, which are digital items you can truly own. Digital items have existed for a long time, but never like this.
          </SubTitle>
          <Button>Get Started</Button>
        </TitleBox>
        <SwiperContainer>
          <Swiper
            slidesPerView= {1.5}
            spaceBetween= {30}
            loop= {true}
            centeredSlides= {true}
            modules= {[Pagination, EffectCoverflow]}
            effect= "coverflow"
            coverflowEffect= {{
              rotate: 0,
              stretch: 1,
              depth: 150,
              modifier: 2,
              slideShadows: true 
            }}
            className="mySwiper"
          >
            {NFTitems.map((item, index) => (
              <SwiperSlide key={index}> 
                {item} 
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </MainBannerContent>
    )  
}

export default MainBanner;