import React from 'react';
import pandaLogo from '../../assets/image/panda-logo.svg'
import {
    HeaderContainer,
    HeaderLogo,
    Logo,
    HeaderMenu,
    Menu,
    Button,
    Content,
    ContentLi,
    ConnectButton
} from './header.styled';

function header() {
  return (
    <HeaderContainer>
        <HeaderLogo>
            <img src={pandaLogo} className="logo" alt="logo"/>
            <Logo>
                HomeWork NFT
            </Logo>
        </HeaderLogo>
        <HeaderMenu>
            <Menu>
                <Content>
                    <ContentLi>Home</ContentLi>
                    <ContentLi>Discover</ContentLi>
                    <ContentLi>Docs</ContentLi>
                    <ContentLi>Blog</ContentLi>
                    <ContentLi>About Us</ContentLi>
                    <ContentLi>Contact US</ContentLi>
                </Content>
            </Menu>
            <Button>
                <ConnectButton>
                    Connect Wallet
                </ConnectButton>
            </Button>
        </HeaderMenu>
    </HeaderContainer>
  )
}

export default header