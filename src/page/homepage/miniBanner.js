import React from 'react'
import miniBannerImage from '../../assets/image/icon/miniBanner.png';
import { MiniBannerContent } from './index.styled';

function MiniBanner(){
    return (
        <MiniBannerContent> 
            <div className='item'>
                <img src={miniBannerImage} alt={miniBannerImage}/>
            </div>
        </MiniBannerContent>
    )
}

export default MiniBanner;