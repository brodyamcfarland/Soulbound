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
        <h1 className='home__description__header'>--What is Soulbound?--</h1>
        <article className='home__description__words'>Soulbound allows users to mint non-transferable tokens that live with the user forever. This allows wallets to have unique identity attributes which makes for quick and easy account setup. In Soulbound's use case, we mint a token that allows wallet owners to specify their: Username, Bio, and a Token URI (IPFS link for Profile Picture). Soulbound is compatible with c0nn3ct3d network. These tokens will not be found on OpenSea or Etherscan. We are currently running on the Rinkeby Test Network. </article>
        <article className='home__description__grey'>Click <a href="/" className="sc_link">Here</a> to view the Smart Contract code</article>
      </div>
    </div>
  )
}

export default Home