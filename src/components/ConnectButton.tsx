import React from 'react'
import './header/Header.css'

interface Props{
  connectAccount: any;   
};

const ConnectButton = ({ connectAccount }: Props) => {
  return (
    <button className='connect-btn' onClick={connectAccount}>Connect</button>
  )
}

export default ConnectButton;