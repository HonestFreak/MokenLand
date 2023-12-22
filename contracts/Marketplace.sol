// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Marketplace {
    struct ListedToken {
        address seller;
        IERC20 token;
        uint256 listingSupply;
        uint256 tokenPrice;
        string tokenType;
        string tokenDesc;
        uint256 revenue;
        string tokenName;
        string tokenSymbol;
    }
    uint256 public count = 0;
    mapping(uint256 => ListedToken) public tokens; // tokenId => ListedToken
    mapping(address => uint256[]) userTokens; // stores all ListedToken ids for each user address

    event TokenListed(address indexed seller, address indexed token, uint256 listingSupply, uint256 tokenPrice);
    event TokenSold(address indexed buyer, address indexed token, uint256 amount, uint256 totalPrice);

    function getUserTokens(address _address) view public returns (uint256[] memory){
        return userTokens[_address];
    }

    function listToken(IERC20 _token, uint256 _listingSupply, uint256 _tokenPrice,
     string memory _tokenType , string memory _tokenDesc , string memory _tokenName 
     , string memory _tokenSymbol) external {
        require(_listingSupply > 0, "Listing supply must be greater than 0");
        require(_tokenPrice > 0, "Token price must be greater than 0");
        require(_token.approve(address(this), _listingSupply), "Approval failed");

        ListedToken memory newToken = ListedToken({
            seller: msg.sender,
            token: _token,
            listingSupply: _listingSupply,
            tokenPrice: _tokenPrice,
            tokenType: _tokenType,
            tokenDesc: _tokenDesc,
            tokenName: _tokenName,
            tokenSymbol: _tokenSymbol,
            revenue: 0
        });
        count++;
        tokens[count] = newToken;
        userTokens[msg.sender].push(count);

        emit TokenListed(msg.sender, address(_token), _listingSupply, _tokenPrice);
    }

    function buyToken(uint256 _id, uint256 _amount) external {
        require(_id <= count, "Invalid token index");
        ListedToken storage current_token = tokens[_id];

        require(current_token.listingSupply >= _amount, "Not enough tokens available for purchase");
        uint256 totalPrice = _amount * current_token.tokenPrice;

        // Transfer tokens to the buyer
        current_token.token.transferFrom(current_token.seller, msg.sender, _amount);

        // Update the listing supply
        current_token.listingSupply -= _amount;
        current_token.revenue += totalPrice;

        // Emit event for the token purchase
        emit TokenSold(msg.sender, address(current_token.token), _amount, totalPrice);
    }
}
