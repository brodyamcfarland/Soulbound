# Soulbound
**IMPORTANT! Burn the first token in the contract since TokenId = 0 will cause problems in JS Logic**

## Tools
- React w/ Typescript
- Solidity
- Infura API
- Ethers.js

### Summary
Soulbound allows you to mint a soulboul tokens (SBT's) that records the user's Username, Bio, and IPFS Url (for Profile Photo). This app runs on the Rinkeby Ethereum Test Network. The Maximum amount of accounts that can be minted is 3. The only cost associated with the account is the minting fee. These SBT's are integrated with c0nn3ct3d social media app.

Feel free to go to c00nn3ct3d after minting your token.
https://brodyamcfarland.github.io/Soulbound/

## Steps
1) Make sure you have MetaMask downloaded and are connected to the Rinkeby Test Network
2) Click the "Connect" Button on the header
3) Go to the Form on the bottom section of the app and enter your username and bio
4) the IPFS URL should be the following format "ipfs://(CID)"
- The CID can be found the the end of your IPFS link (Starts with Qm followed by random text "QmXxXXXxxxXXxXXxXxXX")
- I recommend pinata for easy photo pinning to IPFS
5) Once all info is inputted, click submit and pay the gas fee from metamask.
6) Wait for transaction to confirm
7) Your token is now Minted, you can check your TokenID by clicking the "Check Soul Token ID" button.
