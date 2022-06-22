import React from 'react'
import './header/Header.css'

interface Props{
  account: string;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
  connectAccount: any;   
};

const ConnectButton = ({ account, setAccount, connectAccount }: Props) => {
  return (
    <button className='connect-btn' onClick={connectAccount}>Connect</button>
  )
}

export default ConnectButton;