import React from 'react'
import './Home.css'
import banner from '../../images/Banner.gif'

const Home = () => {
  return (
    <div className='home__container'>
      <div className="home__imagebanner">
        <img src={banner} alt="bannergif" />
      </div>
      <div className="home__description">
        <h1 className='home__description__header'>-- What is Soulbound? --</h1>
        <article className='home__description__words'>Soulbound allows users to mint non-transferable tokens that live with the user forever. This allows wallet owners to specify their Username, Bio, and a Token URI (IPFS link for Profile Picture). Soulbound is compatible with c0nn3ct3d network. These tokens will not be found on OpenSea or Etherscan. We are currently running on the Rinkeby Test Network. </article>
        <article className='home__description__grey'>Click <a href="https://github.com/brodyamcfarland/Soulbound" target='_blank' className="sc_link">Here</a> to view the Smart Contract code</article>
      </div>
      <div className="steps">
        <h1 className='steps__description__header'>-- How to Mint --</h1>
        <ul className='list__text'><span className='circled__numbers'>1</span>Connect to MetaMask with the Connect Button</ul>
        <ul className='list__text'><span className='circled__numbers'>2</span>Fill out the --SOULBOUND ACCOUNT FORM--</ul>
        <ul className='list__text'><span className='circled__numbers'>3</span>Click "Submit" and pay the gas fee</ul>
      </div>
    </div>
  )
}

export default Home