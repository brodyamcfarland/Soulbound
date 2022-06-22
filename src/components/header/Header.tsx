import React from 'react'
import ConnectButton from '../ConnectButton'
import './Header.css'

interface Props{
  account: string;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
}
declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

const Header = ({ account, setAccount }: Props) => {
  
  const isConnected = Boolean(account[0]);

     async function connectAccount() {
        if (window.ethereum) {
            const account = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccount(account);
        }
    }

    async function disconnect() {
      setAccount('');
    }

  return (
    <div className='header__container'>
        <div className="header__links">
            <span className='header__seperate'>GITHUB</span> | <span className='header__seperate'>TWITTER</span> | <span className='header__seperate'>c0nn3ct3d</span>
        </div>
        <div className="header__logo">
            SOULBOUND
        </div>
        {isConnected ? (
          <div className='connected__disconnect'>
            <span className='header__connected'>Connected to {account[0]}</span>
            <button className='header__disconnect' onClick={disconnect} >Disconnect</button>
          </div>
        ) : (
          <ConnectButton account={account} setAccount={setAccount} connectAccount={connectAccount}/>
        )}        
    </div>
  )
}

export default Header;