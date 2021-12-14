// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./Factory.sol";
import "./Governable.sol";
import "./interface/IBondTellerV2.sol";
import "./interface/IBondDepositoryV2.sol";

/**
 * @title BondDepositoryV2
 * @author solace.fi
 * @dev We need to retire the original BondDepository contract, and deploy a V2, because the original contract is intertwined with the V1 BondTeller contracts
 * @dev Appended V2 to many `Bond...` variable and object names to minimise probability of pointing to a smart contract from the BondV1 system
 * @notice Factory and manager of [`Bond Tellers V2`](./BondTellerBaseV2).
 */
contract BondDepositoryV2 is IBondDepositoryV2, Factory, Governable {

    // pass these when initializing tellers
    address internal _solace;
    address internal _xsolace;
    address internal _pool;
    address internal _dao;

    // track tellers
    mapping(address => bool) internal _isTellerV2;

    /**
     * @notice Constructs the BondDepositoryV2 contract.
     * @param governance_ The address of the [governor](/docs/protocol/governance).
     * @param solace_ Address of [**SOLACE**](./solace).
     * @param xsolace_ Address of [**xSOLACE**](./xsolace).
     * @param pool_ Address of underwriting pool.
     * @param dao_ Address of the DAO.
     */
    constructor(address governance_, address solace_, address xsolace_, address pool_, address dao_) Governable(governance_) {
        _setAddresses(solace_, xsolace_, pool_, dao_);
    }

    /***************************************
    VIEW FUNCTIONS
    ***************************************/

    /// @notice Native [**SOLACE**](./SOLACE) Token.
    function solace() external view override returns (address solace_) {
        return _solace;
    }

    /// @notice [**xSOLACE**](./xSOLACE) Token.
    function xsolace() external view override returns (address xsolace_) {
        return _xsolace;
    }

    /// @notice Underwriting pool contract.
    function underwritingPool() external view override returns (address pool_) {
        return _pool;
    }

    /// @notice The DAO.
    function dao() external view override returns (address dao_) {
        return _dao;
    }

    /// @notice Returns true if the address is a teller.
    function isTellerV2(address teller) external view override returns (bool isTellerV2_) {
        return _isTellerV2[teller];
    }

    /***************************************
    TELLER V2 MANAGEMENT FUNCTIONS
    ***************************************/

    /**
     * @notice Creates a new [`BondTellerV2`](./BondTellerBaseV2).
     * Can only be called by the current [**governor**](/docs/protocol/governance).
     * @param name The name of the bond token.
     * @param governance The address of the teller's [governor](/docs/protocol/governance).
     * @param impl The address of BondTellerV2 implementation.
     * @param principal address The ERC20 token that users give.
     * @return teller The address of the new teller.
     */
    function createBondTellerV2(
        string memory name,
        address governance,
        address impl,
        address principal
    ) external override onlyGovernance returns (address teller) {
        teller = _deployMinimalProxy(impl);
        IBondTellerV2(teller).initialize(name, governance, _solace, _xsolace, _pool, _dao, principal, address(this));
        _isTellerV2[teller] = true;
        emit TellerV2Added(teller);
        return teller;
    }

    /**
     * @notice Creates a new [`BondTellerV2`](./BondTellerBaseV2).
     * Can only be called by the current [**governor**](/docs/protocol/governance).
     * @param name The name of the bond token.
     * @param governance The address of the teller's [governor](/docs/protocol/governance).
     * @param impl The address of BondTellerV2 implementation.
     * @param salt The salt for CREATE2.
     * @param principal address The ERC20 token that users give.
     * @return teller The address of the new teller.
     */
    function create2BondTellerV2(
        string memory name,
        address governance,
        address impl,
        bytes32 salt,
        address principal
    ) external override onlyGovernance returns (address teller) {
        teller = _deployMinimalProxy(impl, salt);
        IBondTellerV2(teller).initialize(name, governance, _solace, _xsolace, _pool, _dao, principal, address(this));
        _isTellerV2[teller] = true;
        emit TellerV2Added(teller);
        return teller;
    }

    /**
     * @notice Adds a teller.
     * Can only be called by the current [**governor**](/docs/protocol/governance).
     * @param teller The teller to add.
     */
    function addTellerV2(address teller) external override onlyGovernance {
        _isTellerV2[teller] = true;
        emit TellerV2Added(teller);
    }

    /**
     * @notice Adds a teller.
     * Can only be called by the current [**governor**](/docs/protocol/governance).
     * @param teller The teller to remove.
     */
    function removeTellerV2(address teller) external override onlyGovernance {
        _isTellerV2[teller] = false;
        emit TellerV2Removed(teller);
    }

    /**
     * @notice Sets the parameters to pass to new tellers.
     * Can only be called by the current [**governor**](/docs/protocol/governance).
     * @param solace_ Address of [**SOLACE**](./solace).
     * @param xsolace_ Address of [**xSOLACE**](./xsolace).
     * @param pool_ Address of underwriting pool.
     * @param dao_ Address of the DAO.
     */
    function setAddresses(address solace_, address xsolace_, address pool_, address dao_) external override onlyGovernance {
        _setAddresses(solace_, xsolace_, pool_, dao_);
    }

    /**
     * @notice Sets the parameters to pass to new tellers.
     * @param solace_ Address of [**SOLACE**](./solace).
     * @param xsolace_ Address of [**xSOLACE**](./xsolace).
     * @param pool_ Address of underwriting pool.
     * @param dao_ Address of the DAO.
     */
    function _setAddresses(address solace_, address xsolace_, address pool_, address dao_) internal {
        require(solace_ != address(0x0), "zero address solace");
        require(xsolace_ != address(0x0), "zero address xsolace");
        require(pool_ != address(0x0), "zero address pool");
        require(dao_ != address(0x0), "zero address dao");
        _solace = solace_;
        _xsolace = xsolace_;
        _pool = pool_;
        _dao = dao_;
        emit ParamsSet(solace_, xsolace_, pool_, dao_);
    }

    /***************************************
    FUND MANAGEMENT FUNCTIONS
    ***************************************/

    /**
     * @notice Sends **SOLACE** to the teller.
     * Can only be called by tellers.
     * @param amount The amount of **SOLACE** to send.
     */
    function pullSolace(uint256 amount) external override {
        // this contract must hold solace
        // can only be called by authorized minters
        require(_isTellerV2[msg.sender], "!teller");
        // transfer
        SafeERC20.safeTransfer(IERC20(_solace), msg.sender, amount);
    }

    /**
     * @notice Sends **SOLACE** to an address.
     * Can only be called by the current [**governor**](/docs/protocol/governance).
     * @param dst Destination to send **SOLACE**.
     * @param amount The amount of **SOLACE** to send.
     */
    function returnSolace(address dst, uint256 amount) external override onlyGovernance {
        SafeERC20.safeTransfer(IERC20(_solace), dst, amount);
    }
}
