// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SendCoin {
    mapping(address => uint256) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _amount);

    event Buy(address indexed _from, uint256 _amount);

    constructor() {
        // tx.originってなんだ？
        balances[tx.origin] = 10000;
    }

    function sendCoin(address _to, uint256 _amount) public {
        require(balances[msg.sender] > _amount);
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
        emit Transfer(msg.sender, _to, _amount);
    }

    function getBalance(address _addr) public view returns (uint256) {
        return balances[_addr];
    }

    function buyCoin() public payable {
        require(msg.value == 1 ether);
        balances[msg.sender] += 1000;
        emit Buy(msg.sender, 1000);
    }
}
