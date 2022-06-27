import React from 'react'
import {FaGithub} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import {SiWebmoney} from 'react-icons/si';
import './Footer.css'

const Footer = () => {
  return (
    <div className='container_footer'>
      <div className='social_links'>
        <a className='social__icons' href="https://github.com/brodyamcfarland/Soulbound" target="_blank" id="Githubbtn"><FaGithub /></a>
        <a className='social__icons' href="https://twitter.com/off2eth" target="_blank" id="Twitterbtn"><FiTwitter/></a>
        <a className='social__icons' href='https://brodyamcfarland.github.io/BrodyMcFarland/' target='_blank'><SiWebmoney/></a>
      </div>
      <div className="footer__copyright">
        <small className='copywright_tag'>&copy; Soulbound 2022. All rights reserved.</small>
      </div>
    </div>
  )
}

export default Footer