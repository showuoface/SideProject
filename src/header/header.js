import React from 'react';
import './header.scss';
import headerLogo from '../assets/image/header-logo.svg'

function header() {
  return (
    <div className="header-container">
        <div className="headerLogo">
            <img src={headerLogo} className="logo" alt="logo" />
            <p>
                HomeWork NFT
            </p>
        </div>
        <div className='header-menu'>
            <div className='menu'>
                <ul className='content'>
                    <li>Home</li>
                    <li>Discover</li>
                    <li>Docs</li>
                    <li>Blog</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                </ul>
            </div>
            <div className='button'>
                <button className='connect-button'>
                    Connect Wallet
                </button>
            </div>
        </div>
    </div>
  )
}

export default header