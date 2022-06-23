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

//TODO LIST:
// 2) Smart Contract require statement on issue() is fucked up, i think i need to map count to an adress
// 3) Add a Logo or Halo or something to make it look cooler
// 4) Fix the fucking center logo being in the center

const Minter = ({account, tokenUsername, setTokenUsername, tokenBio, setTokenBio, tokenURI, setTokenURI}: Props) => {

  // const INFURA_ID = '9c3402c884734a42bd435d171f6b49fa';
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
    const contract = new ethers.Contract('0x579F5b6282C67A394Ce341BDa1616Af7Ef6BB887', ABI, provider.getSigner());
    console.log(contract.interface);
    await contract.issue(account[0], tokenURI, tokenUsername, tokenBio);
  }

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
      <form className="mint__form" onSubmit={handleSubmit}>
        <div className="mint__form__header">--SOULBOUND ACCOUNT FORM--</div>
        <div className="mint__form__labels">Please enter a Username:</div>
        <input onChange={ (e) =>setTokenUsername(e.target.value)}type="text" className="username" placeholder='Enter Username...'/>
        <div className="mint__form__labels">Please enter a Bio:</div>
        <input onChange={ (e) =>setTokenBio(e.target.value)}type="text" className="bio" placeholder='Full-Stack Blockchain Dev'/>
        <div className="mint__form__labels">Please enter a IPFS image URI:</div>
        <input onChange={ (e) =>setTokenURI(e.target.value)}type="text" className="tokenURI" placeholder='ipfs://QmVsNGRmQZhsqxyRfpQK8rZcksG8m5jeQtvMF7t52dAEw4/1.png'/>
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