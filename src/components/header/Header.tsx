import React from 'react'
import ConnectButton from '../ConnectButton'
import './Header.css'


const Header = () => {
  return (
    <div className='header__container'>
        <div className="header__links">
            <span className='header__seperate'>GITHUB</span> | <span className='header__seperate'>TWITTER</span> | <span className='header__seperate'>c0nn3ct3d</span>
        </div>
        <div className="header__logo">
            SOULBOUND
        </div>
        <ConnectButton/>
    </div>
  )
}

export default Header;