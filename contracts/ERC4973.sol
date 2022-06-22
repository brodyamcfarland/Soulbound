// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "./IERC165.sol";
import "./IERC721MetaData.sol";
import "./IERC4973.sol";


abstract contract ERC4973 is IERC165, IERC721MetaData, IERC4973 {
  string private _name;
  string private _symbol;

  mapping(uint256 => address) private _owners;
  mapping(uint256 => string) private _tokenURIs;
  mapping(uint256 => string) private _tokenUsernames;
  mapping(uint256 => string) private _tokenBio;

  constructor(
    string memory name_,
    string memory symbol_
  ) {
    _name = name_;
    _symbol = symbol_;
  }

  function supportsInterface(bytes4 interfaceId) public view override returns (bool) {
    return
      interfaceId == type(IERC721MetaData).interfaceId ||
      interfaceId == type(IERC4973).interfaceId ||
      super.supportsInterface(interfaceId);
  }

  function name() public view virtual override returns (string memory) {
    return _name;
  }

  function symbol() public view virtual override returns (string memory) {
    return _symbol;
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    require(_exists(tokenId), "tokenURI: token doesn't exist");
    return _tokenURIs[tokenId];
  }

  function tokenUsernames(uint256 tokenId) public view virtual returns (string memory) {
    require(_exists(tokenId), "tokenURI: token doesn't exist");
    return _tokenUsernames[tokenId];  
  }

  function tokenBio(uint256 tokenId) public view virtual returns (string memory) {
    require(_exists(tokenId), "tokenURI: token doesn't exist");
    return _tokenBio[tokenId];  
  }

  function _exists(uint256 tokenId) internal view virtual returns (bool) {
    return _owners[tokenId] != address(0);
  }

  function ownerOf(uint256 tokenId) public view virtual returns (address) {
    address owner = _owners[tokenId];
    require(owner != address(0), "ownerOf: token doesn't exist");
    return owner;
  }

  function _mint(address to, uint256 tokenId, string calldata uri, string calldata username, string calldata bio) internal virtual returns (uint256) {
    require(!_exists(tokenId), "mint: tokenID exists");
    _tokenUsernames[tokenId] = username;
    _owners[tokenId] = to;
    _tokenURIs[tokenId] = uri;
    _tokenBio[tokenId] = bio;
    emit Attest(to, tokenId);
    return tokenId;
  }

  function _burn(uint256 tokenId) internal virtual {
    address owner = ownerOf(tokenId);

    delete _owners[tokenId];
    delete _tokenURIs[tokenId];

    emit Revoke(owner, tokenId);
  }
}