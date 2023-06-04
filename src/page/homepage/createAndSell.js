import React from 'react'
import createAndSell from '../../assets/image/icon/create-and-sell-icon.svg';

const titleItems = ['Set up your wallet', 'Add your NFTs', 'List them for sale'];

const createAndSellItems = titleItems.map((item, index) =>
  <div className='item' key={index}>
    <img src={createAndSell} alt={createAndSell}/>
    <div className='subTitle' >
     {item}
    </div>
    <div className='content'>
      Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.
    </div>
  </div>
)

export default function CreateAndSell() {
  return (
    <div className='createAndSell'>
        <div className='title'>
          Create and sell your NFTs
        </div>
        <div className='cartItem'>
          {createAndSellItems}
        </div>
  </div>
  )
}
