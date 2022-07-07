// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC4973.sol";

contract SoulBound is ERC4973 {
    address public owner;
    mapping(address => uint256) public walletMints;
    uint public MaxPerWallet = 1;
    uint public count;

    constructor () ERC4973("Soulbound", "SOUL") {
        owner = msg.sender;
    }

    function burn(uint256 _tokenId) external override {
        require(ownerOf(_tokenId) == msg.sender || msg.sender == owner, "You can't revoke this token");
        _burn(_tokenId);
        walletMints[msg.sender]--;
    }

    function issue(address _issuee, string calldata _uri, string calldata username, string calldata bio) external {
        require(_issuee == msg.sender, "You can only create an account for yourself!");
        require(walletMints[msg.sender] < MaxPerWallet, "Only 1 Soulbound Account Allowed!");
        _mint(_issuee, count, _uri, username, bio);
        count += 1;
        walletMints[msg.sender]++;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }
}