import React from 'react';
import './footer.scss';

import pandaLogo from '../../assets/image/panda-logo.svg';
import facebook from '../../assets/image/icon/facebook-icon.svg';
import twitter from '../../assets/image/icon/twitter-icon.svg';
import instagram from '../../assets/image/icon/instagram-icon.svg';


const resourceItems = ['Help Center', 'Platform Status', 'Partners', 'Gas-Free Marketplace', 'Blog'];
const companyItems = ['Our Team', 'About Us', 'Contact Us', 'Career'];
const contactIcon = [facebook, twitter, instagram];

export const footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-detail'>
        <div className='detail'>
          <div className='title'>
            <img src={pandaLogo} className="logo" alt="logo"/>
            <span>Panda NFT</span>
          </div>
          <div className='content'>
            <span>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</span>
          </div>
        </div>

        <div className='resource'>
          <div className='title'>
            <span>Resources</span>
          </div>
          <div className='content'>
            <ul>
            {resourceItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            </ul>
          </div>
        </div>

        <div className='company'>
          <div className='title'>
            <span>Company</span>
          </div>
          <div className='content'>
            <ul>
              {companyItems.map((item, index)=> (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='contact'>
          <div className='title'>
            <span>Contact</span>
          </div>
          <div className='content'>
            <div className='text'>
              2715 Ash Dr. San Jose, South Dakota 83475
            </div>
            <div className='icon'>
              {contactIcon.map((item, index) => (
                <img key={index} src={item} alt='logo'/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='copyRight'>
        <span>2021 All Right Reserved</span>
      </div>
    </div>
  )
}

export default footer