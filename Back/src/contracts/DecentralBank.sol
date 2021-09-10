// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "./RWD.sol";
import "./Tether.sol";

contract DecentralBank {
    string public name = "DecentralBank";
    address public owner;
    Tether public tether;
    RWD public rwd;
    address[] public stackers;
    
    mapping(address => uint256) public stackingBalance;
    mapping(address => bool) public hasStacked;
    mapping(address => bool) public isStacked;

    constructor(RWD _rwd, Tether _tether) {
        tether = _tether;
        rwd = _rwd;
        owner = msg.sender;
    }

    
    // stacking 
    function depositTokens(uint256 _amount) public {
        require(_amount > 0 ,"amount can not be 0");
        tether.transferFrom(msg.sender, address(this), _amount);
        // update stacking balance
        stackingBalance[msg.sender] += stackingBalance[msg.sender] + _amount;

        if(!hasStacked[msg.sender]) {
            stackers.push(msg.sender);
        }

        // update stacking balance

        isStacked[msg.sender] = true;
        hasStacked[msg.sender] = true;

    }


    // owner Modifier
    modifier redrictOwner() {
        require(msg.sender == owner);
        _;
    }

    // issue token
    function issuToken() public  redrictOwner{

        for(uint i=0 ; i <= stackers.length;i++)
        {
            address recipent = stackers[i];
            uint balance = stackingBalance[recipent] / 9 ;
            if(balance >0) {
                rwd.transfer(recipent, balance);
            }
        }

    }

    // unstacke tokens
    function unstakeTokens() public {
        uint balance = stackingBalance[msg.sender];
        require(balance >0,'stacking balance cannot be less taht zero');
        tether.transfer(msg.sender, balance);
        stackingBalance[msg.sender] =0;
        isStacked[msg.sender] = false;
    }
}
