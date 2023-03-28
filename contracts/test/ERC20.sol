pragma solidity =0.5.16;

import "../ZKVaultERC20.sol";

contract ERC20 is ZKVaultERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
