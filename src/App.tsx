import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Minter from './components/minter/Minter';
import Footer from './components/footer/Footer';
import { ethers } from "ethers";
import { useState } from 'react';

//======================================CONTRACT CONNECTION============================================================================//

const INFURA_ID = '9c3402c884734a42bd435d171f6b49fa';
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${INFURA_ID}`);

const ABI = [
  "function issue(address _issuee, string calldata _uri, string calldata username, string calldata bio) external",
  "function _mint(address to, uint256 tokenId, string calldata uri, string calldata username, string calldata bio) returns (uint256)",
  "function name() external view returns (string memory)",
  "function symbol() external view returns (string memory)",
  "function tokenURI(uint256 tokenId) external view returns (string memory)",
  "function tokenUsernames(uint256 tokenId) public view returns (string memory)",
  "function tokenBio(uint256 tokenId) public view returns (string memory)"
]

const address = '0xF49f1a457F7EA85E3ee2F669B09Df9313281268b'; //Soulbound SC Address

const contract = new ethers.Contract(address, ABI, provider);

const main = async () => {
  const name = await contract.name()
  const symbol = await contract.symbol()
  const tokenURI = await contract.tokenURI(0)
  const tokenUsernames = await contract.tokenUsernames(0)
  const tokenBio = await contract.tokenBio(0)
  console.log(`\nReading from Smart Contract: ${address}`);
  console.log(`\nName: ${name}`)
  console.log(`\nSymbol: ${symbol}`)
  console.log(`\nToken Id 0: ${tokenURI}`)
  console.log(`\nToken Username 0: ${tokenUsernames}`)
  console.log(`\nToken Bio 0: ${tokenBio}`)
}

main();

//======================================CONTRACT CONNECTION END==========================================================================//

function App() {

  const [account, setAccount] = useState<string>('');
  const [tokenUsername, setTokenUsername] = useState<string>('');
  const [tokenBio, setTokenBio] = useState<string>('');
  const [tokenURI, setTokenURI] = useState<string>('');

  return (
    <>
      <Header account={account} setAccount={setAccount} />
      <Home/>
      <Minter 
        account={account}
        tokenUsername={tokenUsername}
        setTokenUsername={setTokenUsername}
        tokenBio={tokenBio}
        setTokenBio={setTokenBio}
        tokenURI={tokenURI}
        setTokenURI={setTokenURI}
      />
      <Footer/>
    </>
  );
}

export default App;