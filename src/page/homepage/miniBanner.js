import React from 'react'
import BinanceIcon from '../../assets/image/icon/binance_icon.png';
import CoinbaseIcon from '../../assets/image/icon/Coinbase_icon.png';
import HorizontalIcon from '../../assets/image/icon/horizontal_icon.png';
import MetaMaskIcon from '../../assets/image/icon/MetaMask_icon.png';
import TokoCryptoIcon from '../../assets/image/icon/Tokocrypto_icon.png';

import { MiniBannerContent } from './index.styled';

function MiniBanner(){
    return (
        <MiniBannerContent> 
            <div className='item'>
                <img src={BinanceIcon} alt="BinanceIcon"/>
                <img src={CoinbaseIcon} alt="CoinbaseIcon"/>
                <img src={HorizontalIcon} alt="HorizontalIcon"/>
                <img src={MetaMaskIcon} alt="MetaMaskIcon"/>
                <img src={TokoCryptoIcon} alt="TokoCryptoIcon"/>
            </div>
        </MiniBannerContent>
    )
}

export default MiniBanner;