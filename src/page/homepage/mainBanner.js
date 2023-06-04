import React, { useRef, useEffect } from 'react';
import NFTImage from '../../assets/image/item/NFT-item.png';
import Swiper from 'swiper';
import 'swiper/swiper.min.css';

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

const NFTitems = Array.from({ length: 5 }, () => NFTitem);

function MainBanner() {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = new Swiper(swiperRef.current, {
        slidesPerView: 'auto',
        spaceBetween: 60,
        centeredSlides: true,
        });

        return () => {
        swiper.destroy(true, true);
        };
    }, []);

    return (
      <div className='mainBanner'>
          <div className='title-box'>
            <div className='title'>
                Discover a New Era of Crypto Currency
            </div>
            <div className='subTitle'>
                Panda NFT is the primier marketplace for NFT, which are digital items you can truly own. Digital items have existed for a long time, but never like this.
            </div>
            <button className='get-started'>Get Started</button>
          </div>
          <div className="swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
              {NFTitems.map((item, index) => (
                <div className="swiper-slide" key={index}> 
                  {item} 
                </div>
              ))}
            </div>
          </div>
      </div>
    )  
}

export default MainBanner;