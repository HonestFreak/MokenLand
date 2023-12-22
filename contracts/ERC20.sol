// SPDX-License-Identifier: MIT
pragma solidity >=0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Register {
    function register(address _recipient) public returns (uint256 tokenId) {}
}

contract Token is ERC20 {
    constructor(string memory _name, string memory _ticker, uint256 _supply) payable  ERC20(_name, _ticker) {
      _mint(msg.sender, _supply);
       Register sfsContract = Register(0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6); // SFS Testnet
       sfsContract.register(msg.sender);
    }

      function airdrop(address[] memory _accounts, uint256 _amount) public {
        for (uint i = 0; i < _accounts.length; i++) {
            _transfer(msg.sender, _accounts[i], _amount);
        }
    }
}

// Generates a new token and registers for SFS
contract Factory {
    address[] public tokens;
    uint256 public tokenCount = 0;
    mapping(address =>  address[]) public userTokens ;
    event TokenDeployed(address tokenAddress);

    function userData(address user) view  public returns (address[] memory) {
        return userTokens[user];
    }

    function deployToken(string calldata _name, string calldata _ticker, uint256 _supply) public {
        Token token = new Token(_name, _ticker, _supply);
        token.transfer(msg.sender, _supply);
        tokens.push(address(token));
        userTokens[msg.sender].push(address(token));
        tokenCount += 1;
        emit TokenDeployed(address(token));
    }
}