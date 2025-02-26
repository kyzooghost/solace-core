// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.6;

import "./interface/ISOLACE.sol";
import "./interface/IFaucet.sol";

/**
 * @title Faucet
 * @author solace.fi
 * @notice Drips **SOLACE**.
 */
contract Faucet is IFaucet {

    ISOLACE public solace;
    mapping(address => uint256) public lastPull;

    /**
     * @notice Constructs the faucet.
     * @param solace_ Address of the **SOLACE** contract.
     */
    constructor(address solace_) {
        require(solace_ != address(0x0), "zero address solace");
        solace = ISOLACE(solace_);
    }

    /**
     * @notice Drips **SOLACE** to msg.sender.
     */
    function drip() external override {
        require(lastPull[msg.sender] + 86400 <= block.timestamp, "well dry");
        solace.mint(msg.sender, 10 ether);
        lastPull[msg.sender] = block.timestamp;
    }
}
