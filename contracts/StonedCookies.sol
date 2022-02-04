// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "./meta-transactions/ContextMixin.sol";
import "./meta-transactions/NativeMetaTransaction.sol";

contract OwnableDelegateProxy {}

// this one is a mock for tests
contract ApprovedSpenderContract {

}

contract ProxyRegistry {
    mapping(address => OwnableDelegateProxy) public proxies;
}

contract StonedCookies is Ownable, ERC721("StonedCookies", "STC"), ContextMixin, NativeMetaTransaction {
    using SafeMath for uint256;

    // proxy address is for mainnet
    address public proxyRegistryAddress = 0xa5409ec958C83C3f309868babACA7c86DCB077c1;
    string private _baseTokenUri = "https://stoned-cookies-api.herokuapp.com/";
    uint256 public totalSupply = 4200;
    uint256 public currentTokenId = 0;
    uint256 public mintPrice = 0.024 ether;
    uint256 public decimals = 0;
    bool public mintingEnabled = true;
    uint256 public maxMint = 20;

    constructor() {
        _initializeEIP712("StonedCookies");
    }

    function setProxyRegistryAddress(address _newAddress) external onlyOwner {
        proxyRegistryAddress = _newAddress;
    }

    function setMintPrice(uint256 _newPrice) external onlyOwner {
        mintPrice = _newPrice;
    }

    function mint(address _to, uint256 _quantity) public payable {
        require(mintingEnabled, "Minting is currently disabled");
        require(_quantity < 21, "Maximum mint in single transaction is 20");
        uint256 totalCost = _quantity.mul(mintPrice);
        require(msg.value >= totalCost, "Not enough ETH sent; check price!");
        require(currentTokenId.add(_quantity) < totalSupply, "All tokens have been minted");
        for (uint256 i = 0; i < _quantity; i += 1) {
            uint256 newTokenId = _getNextTokenId();
            _safeMint(_to, newTokenId);
            _incrementTokenId();
        }
    }

    function _getNextTokenId() private view returns (uint256) {
        return currentTokenId.add(1);
    }

    function _incrementTokenId() private {
        currentTokenId++;
    }

    function toggleMinting() public onlyOwner {
        mintingEnabled = !mintingEnabled;
    }

    function baseTokenURI() public view virtual returns (string memory) {
        return _baseTokenUri;
    }

    function setBaseTokenURI(string memory _uri) public onlyOwner {
        _baseTokenUri = _uri;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return string(abi.encodePacked(baseTokenURI(), Strings.toString(_tokenId)));
    }

    function isApprovedForAll(address owner, address operator) public view override returns (bool) {
        ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
        if (address(proxyRegistry.proxies(owner)) == operator) {
            return true;
        }

        return super.isApprovedForAll(owner, operator);
    }

    function _msgSender() internal view override returns (address sender) {
        return ContextMixin.msgSender();
    }

    receive() external payable {}

    function withdraw() public onlyOwner returns (bool) {
        uint256 amount = address(this).balance;
        return payable(owner()).send(amount);
    }
}
