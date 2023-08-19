import React from 'react'
import createAndSell from '../../assets/image/icon/create-and-sell-icon.svg';
import {
  CreateAndSellContent,
  CreateAndSellTitle,
  CreateAndSellCartItem,
  CreateAndSellItem,
  CreateAndSellItemSubTitle,
  CreateAndSellItemContent,
} from './index.styled';

const titleItems = ['Set up your wallet', 'Add your NFTs', 'List them for sale'];

const createAndSellItems = titleItems.map((item, index) =>
  <CreateAndSellItem key={index}>
    <img src={createAndSell} alt={createAndSell}/>
    <CreateAndSellItemSubTitle>
     {item}
    </CreateAndSellItemSubTitle>
    <CreateAndSellItemContent>
      Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.
    </CreateAndSellItemContent>
  </CreateAndSellItem>
)

export default function CreateAndSell() {
  return (
    <CreateAndSellContent>
        <CreateAndSellTitle>
          Create and sell your NFTs
        </CreateAndSellTitle>
        <CreateAndSellCartItem>
          {createAndSellItems}
        </CreateAndSellCartItem>
    </CreateAndSellContent>
  )
}
