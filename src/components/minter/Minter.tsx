import { Contract, ethers } from 'ethers';
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
  provider: ethers.providers.JsonRpcProvider
}

const Minter = ({account, tokenUsername, setTokenUsername, tokenBio, setTokenBio, tokenURI, setTokenURI}: Props) => {

  const ABI = ["function issue(address _issuee, string _uri, string username, string bio) external"];


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tokenUsername.length > 0 && tokenBio.length > 0 && tokenURI.length > 0 && window.ethereum) {
      console.log(`Username: ${tokenUsername}`);
      console.log(`Bio: ${tokenBio}`);
      console.log(`URI: ${tokenURI}`);
      console.log(`My Address: ${account[0]}`);
      issue();
    } 
  }

  const issue = async () => {
    console.log(account);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract('0x48F466ef725C256D95C89B2B6822983E7A39B96C', ABI, provider.getSigner());
    console.log(contract.interface);
    await contract.issue(account[0], tokenURI, tokenUsername, tokenBio);
  }

  return (
    <div className='mint__container'>
      <div className="mint__description">
        <h1 className='mint__description__header'>-- MINTING --</h1>
        <article className='mint__description__words'>
          The cost of minting will only be the cost of gas. You will be allowed up to only 1 Account per Wallet.
          <br/> Choose your username, a short bio, and an IPFS Image URI. The IPFS image URI will require you to upload a photo on IPFS and paste the URI here. Tokens can be burned and re-minted (Coming Soon).
        </article>
        <article className='mint__description__grey'>Click <a href="https://docs.ipfs.io/how-to/best-practices-for-nft-data/#types-of-ipfs-links-and-when-to-use-them#ipfs-uri" target="_blank" className="sc_link">Here</a> to learn more about token URIs and IPFS</article>
      </div>
      <form className="mint__form" onSubmit={handleSubmit}>
        <div className="mint__form__header">-- SOULBOUND ACCOUNT FORM --</div>
        <div className="mint__form__labels">Please enter a Username:</div>
        <input onChange={ (e) =>setTokenUsername(e.target.value)}type="text" className="username" placeholder='Enter Username...'/>
        <div className="mint__form__labels">Please enter a Bio:</div>
        <input onChange={ (e) =>setTokenBio(e.target.value)}type="text" className="bio" placeholder='Enter bio...'/>
        <div className="mint__form__labels">Please enter a IPFS image URI:</div>
        <input onChange={ (e) =>setTokenURI(e.target.value)}type="text" className="tokenURI" placeholder='ipfs://...'/>
        <div className='btn_container'>
          <button className="mint__submit">Submit</button>
        </div>
      </form>
      <div className='connected__promo'>
        <div className="connected__header">
          -- C0NN3CT3D --
        </div>
        <div className='connected__blurb'>
          Try out your new Soulbound Token over at c0nn3ct3d. c0nn3ct3d is a web3 social media platform that accepts SBT's as login credentials. 
        </div>
        <article className='mint__description__grey'>Click <a href="/" className="sc_link">Here</a> to visit C0NN3CT3D</article>
      </div>
    </div>
  )
}

export default Minter;