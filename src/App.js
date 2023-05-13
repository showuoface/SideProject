import React, { useState, useRef, useEffect } from 'react';
import './App.scss';
import Swiper from 'swiper';
import 'swiper/swiper.min.css';

import NFTImage from './assets/image/item/NFT-item.png';
import miniBannerImage from './assets/image/icon/miniBanner.png';
import createAndSell from './assets/image/icon/create-and-sell-icon.svg';
import fireIcon from './assets/image/icon/fire-icon.svg';

const titleItems = ['Set up your wallet', 'Add your NFTs', 'List them for sale'];
const hotNavbar = ['Music', 'Art', 'Sports', 'Virtual', 'Videos', 'More'];

const createAndSellItems = titleItems.map((item) =>
  <div className='item'>
    <img src={createAndSell}></img>
    <div className='subTitle'>
     {item}
    </div>
    <div className='content'>
      Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.
    </div>
  </div>
)

const NFTitem = 
  <div className='item'>
    <img src={NFTImage} alt="kitten" />
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

const FeaturedItem = 
  <div className='item'>
    <div className='imgBox'>
      <img src={NFTImage} alt="kitten" />
      <div className='presonImg'>
        <img src={NFTImage} alt="kitten" />
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

const HotItem = 
  <div className='item'>
    <div className='imgBox'>
      <img src={NFTImage} alt="kitten" />
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

const NFTitems = Array.from({ length: 5 }, () => NFTitem);
const LiveItems = Array.from({ length: 3 }, () => NFTitem);
const FeaturedItems = Array.from({ length: 4 }, () => FeaturedItem);
const HotItems =  Array.from({ length: 6 }, () => HotItem);

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
      setCurrentTime(time);
    }, 1000);

    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 'auto',
      spaceBetween: 60,
      centeredSlides: true,
    });

    return () => {
      clearInterval(interval);
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="App">
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

      <div className='miniBanner'> 
        <div className='item'>
          <img src={miniBannerImage} alt={miniBannerImage}></img>
        </div>
      </div>

      <div className='createAndSell'>
        <div className='title'>
          Create and sell your NFTs
        </div>
        <div className='cartItem'>
          {createAndSellItems}
        </div>
      </div>

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
      
      <div className='hot'>
        <div className='title-box'>
          <div className='title'>
            Hot NFTs
          </div>
          <div className='button'>
            {hotNavbar.map(item =>(
              <button className={item}>
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

      <div className='createYourOwn'>
        <div className='title'>
          Create Your Own NFT!
        </div>
        <div className='content'>
          We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!
        </div>
        <div className='button'>
          <button className='joinNow'>
            Join Comunity Now
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;