// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC4973.sol";

contract SoulBound is ERC4973 {
    address public owner;
    uint256 public count = 0;
    uint256 public mintcap = 2; //Mint Cap will be 3 Accounts Total

    constructor () ERC4973("Soulbound", "SOUL") {
        owner = msg.sender;
    }

    function burn(uint256 _tokenId) external override {
        require(ownerOf(_tokenId) == msg.sender || msg.sender == owner, "You can't revoke this token");
        _burn(_tokenId);
    }

    function issue(address _issuee, string calldata _uri, string calldata username, string calldata bio) external {
        require(count <= mintcap, "Only 3 Soulbound Accounts Allowed.");
        _mint(_issuee, count, _uri, username, bio);
        count += 1;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }
}