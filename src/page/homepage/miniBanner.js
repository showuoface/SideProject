import React from 'react'
import miniBannerImage from '../../assets/image/icon/miniBanner.png';

function MiniBanner(){
    return (
        <div className='miniBanner'> 
            <div className='item'>
                <img src={miniBannerImage} alt={miniBannerImage}/>
            </div>
        </div>
    )
}

export default MiniBanner;