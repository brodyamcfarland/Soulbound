import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Minter from './components/minter/Minter';
import Footer from './components/footer/Footer';
import { ethers } from "ethers";
import { useState } from 'react';

//======================================CONTRACT CONNECTION============================================================================//

const INFURA_ID = process.env.REACT_APP_API_KEY;
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${INFURA_ID}`);

const ABI = [
  "function issue(address _issuee, string calldata _uri, string calldata username, string calldata bio) external", // Main function to get SBT
  "function _mint(address to, uint256 tokenId, string calldata uri, string calldata username, string calldata bio) returns (uint256)",// issue calls Minting function
  "function name() external view returns (string memory)", // Name = Soulbound
  "function symbol() external view returns (string memory)", // Symbol = SOUL
  "function tokenURI(uint256 tokenId) external view returns (string memory)", //to get Profile Image
  "function tokenUsernames(uint256 tokenId) public view returns (string memory)", // to get Username
  "function tokenBio(uint256 tokenId) public view returns (string memory)", // To get Bio
  "function getTokenId(address _address) public view returns (uint)", // To get Token ID
  "function burn(uint256 _tokenId) external", //to burn token *only owner can burn*
]

const address = '0xeB1571e421c55cCB15bdE06FCC7c7A6A886414Ef'; //Soulbound SC Address v3

const contract = new ethers.Contract(address, ABI, provider);

const main = async () => {
  const name = await contract.name()
  const symbol = await contract.symbol()
  // const tokenURI = await contract.tokenURI(1)
  // const tokenUsernames = await contract.tokenUsernames(1)
  // const tokenBio = await contract.tokenBio(1)
  console.log(`\nReading from Smart Contract: ${address}`);
  console.log(`\nName: ${name}`)
  console.log(`\nSymbol: ${symbol}`)
  // console.log(`\nToken URI 1: ${tokenURI}`)
  // console.log(`\nToken Username 1: ${tokenUsernames}`)
  // console.log(`\nToken Bio 1: ${tokenBio}`)
}

main();

//======================================CONTRACT CONNECTION END==========================================================================//

function App() {

  const [account, setAccount] = useState<string>('');
  const [tokenUsername, setTokenUsername] = useState<string>('');
  const [tokenBio, setTokenBio] = useState<string>('');
  const [tokenURI, setTokenURI] = useState<string>('');
  const [tokenId, setTokenId] = useState<number>();

  return (
    <>
      <Header
          account={account}
          setAccount={setAccount}
          />
      <div className='maincontent'>
        <Home/>
        <Minter 
          account={account}
          tokenUsername={tokenUsername}
          setTokenUsername={setTokenUsername}
          tokenBio={tokenBio}
          setTokenBio={setTokenBio}
          tokenURI={tokenURI}
          setTokenURI={setTokenURI}
          provider={provider}
          contract={contract}
          tokenId={tokenId}
          setTokenId={setTokenId}
        />
        <Footer/>
      </div>
    </>
  );
}

export default App;