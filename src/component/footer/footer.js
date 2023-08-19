import React from 'react';

import pandaLogo from '../../assets/image/panda-logo.svg';
import facebook from '../../assets/image/icon/facebook-icon.svg';
import twitter from '../../assets/image/icon/twitter-icon.svg';
import instagram from '../../assets/image/icon/instagram-icon.svg';
import {
  FooterContainer,
  FooterDetail,
  Detail,
  Title,
  Content,
  CopyRight,
  ResourceLi,
  ResourceUl,
  Img,
  Text,
} from './footer.styled'

const resourceItems = ['Help Center', 'Platform Status', 'Partners', 'Gas-Free Marketplace', 'Blog'];
const companyItems = ['Our Team', 'About Us', 'Contact Us', 'Career'];
const contactIcon = [facebook, twitter, instagram];

export const footer = () => {
  return (
    <FooterContainer>
      <FooterDetail>
        <Detail>
          <Title>
            <Img src={pandaLogo} className="logo" alt="logo"/>
            Panda NFT
          </Title>
          <Content>
            The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
          </Content>
        </Detail>

        <div className='resource'>
          <Title>
            Resources
          </Title>

            <ResourceUl>
            {resourceItems.map((item, index) => (
              <ResourceLi key={index}>{item}</ResourceLi>
            ))}
            </ResourceUl>
        </div>

        <div className='company'>
          <Title>
            Company
          </Title>
          <ResourceUl>
            {companyItems.map((item, index)=> (
              <ResourceLi key={index}>{item}</ResourceLi>
            ))}
          </ResourceUl>
        </div>

        <div className='contact'>
          <Title>
            Contact
          </Title>
          <Text>
            2715 Ash Dr. San Jose, South Dakota 83475
          </Text>
          {contactIcon.map((item, index) => (
            <Img key={index} src={item} alt='logo'/>
          ))}
        </div>
      </FooterDetail>
      <CopyRight>
        2021 All Right Reserved
      </CopyRight>
    </FooterContainer>
  )
}

export default footer