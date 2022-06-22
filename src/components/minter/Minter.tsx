import React from 'react'
import './Minter.css'

type Props = {
  account: string;
  tokenUsername: string;
  setTokenUsername: React.Dispatch<React.SetStateAction<string>>;
  tokenBio: string;
  setTokenBio: React.Dispatch<React.SetStateAction<string>>;
  tokenURI: string;
  setTokenURI: React.Dispatch<React.SetStateAction<string>>;
}

//TODO LIST:
// 1) Need to add functionality to the Submit Button and Inputs (State Changes)
// 2) Incorporate ether.js to call the 'issue' SC function with the URI, Username, and Bio
// 3) Add a Logo or Halo or something to make it look cooler
// 4) Fix the fucking center logo being in the center

const Minter = ({account, tokenUsername, setTokenUsername, tokenBio, setTokenBio, tokenURI, setTokenURI}: Props) => {
  return (
    <div className='mint__container'>
      <div className="mint__description">
        <h1 className='mint__description__header'>--MINTING--</h1>
        <article className='mint__description__words'>
          The cost of minting will only be the cost of gas. You will be allowed up to 3 Accounts per Wallet.
          <br/> Choose your username, a short bio, and an IPFS Image URI. The IPFS image URI will require you to upload a photo on IPFS and paste the URI here. 
        </article>
        <article className='mint__description__grey'>Click <a href="/" className="sc_link">Here</a> to learn more about token URIs and IPFS</article>
      </div>
      <form className="mint__form">
        <div className="mint__form__header">--SOULBOUND ACCOUNT FORM--</div>
        <div className="mint__form__labels">Please enter a Username:</div>
        <input type="text" className="username" placeholder='Enter Username...'/>
        <div className="mint__form__labels">Please enter a Bio:</div>
        <input type="text" className="bio" placeholder='Full-Stack Blockchain Dev'/>
        <div className="mint__form__labels">Please enter a IPFS image URI:</div>
        <input type="text" className="tokenURI" placeholder='ipfs://QmVsNGRmQZhsqxyRfpQK8rZcksG8m5jeQtvMF7t52dAEw4/1.png'/>
        <button className="mint__submit">Submit</button>
      </form>
    </div>
  )
}

export default Minter