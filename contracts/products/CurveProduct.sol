// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.6;

import "../interface/Curve/ICurveAddressProvider.sol";
import "../interface/Curve/ICurveRegistry.sol";
import "../interface/Curve/ICurvePool.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./BaseProduct.sol";


/**
 * @title CurveProduct
 * @author solace.fi
 * @notice The **CurveProduct** can be used to purchase coverage for **Curve** positions.
 */
contract CurveProduct is BaseProduct {

    ICurveAddressProvider internal _addressProvider;

    /**
      * @notice Constructs the CurveProduct.
      * @param governance_ The address of the [governor](/docs/protocol/governance).
      * @param policyManager_ The [`PolicyManager`](../PolicyManager) contract.
      * @param registry_ The [`Registry`](../Registry) contract.
      * @param addressProvider_ The Curve Address Provider.
      * @param minPeriod_ The minimum policy period in blocks to purchase a **policy**.
      * @param maxPeriod_ The maximum policy period in blocks to purchase a **policy**.
      * @param price_ The cover price for the **Product**.
      * @param maxCoverPerUserDivisor_ The max cover amount divisor for per user. (maxCover / divisor = maxCoverPerUser).
     */
    constructor (
        address governance_,
        IPolicyManager policyManager_,
        IRegistry registry_,
        address addressProvider_,
        uint40 minPeriod_,
        uint40 maxPeriod_,
        uint24 price_,
        uint32 maxCoverPerUserDivisor_
    ) BaseProduct(
        governance_,
        policyManager_,
        registry_,
        addressProvider_,
        minPeriod_,
        maxPeriod_,
        price_,
        maxCoverPerUserDivisor_,
        "Solace.fi-CurveProduct",
        "1"
    ) {
        _addressProvider = ICurveAddressProvider(addressProvider_);
        _SUBMIT_CLAIM_TYPEHASH = keccak256("CurveProductSubmitClaim(uint256 policyID,uint256 amountOut,uint256 deadline)");
        _productName = "Curve";
    }

    /**
     * @notice Curve's Address Provider.
     * @return addressProvider_ The address provider.
     */
    function addressProvider() external view returns (address addressProvider_) {
        return address(_addressProvider);
    }

    /**
     * @notice Determines if the byte encoded description of a position(s) is valid.
     * The description will only make sense in context of the product.
     * @dev This function should be overwritten in inheriting Product contracts.
     * If invalid, return false if possible. Reverting is also acceptable.
     * @param positionDescription The description to validate.
     * @return isValid True if is valid.
     */
    function isValidPositionDescription(bytes memory positionDescription) public view virtual override returns (bool isValid) {
        // check length
        // solhint-disable-next-line var-name-mixedcase
        uint256 ADDRESS_SIZE = 20;
        // must be concatenation of one or more addresses
        if(positionDescription.length == 0 || positionDescription.length % ADDRESS_SIZE != 0) return false;
        // check all addresses in list
        ICurveRegistry curveRegistry = ICurveRegistry(_addressProvider.get_registry());
        for(uint256 offset = 0; offset < positionDescription.length; offset += ADDRESS_SIZE) {
            // get next address
            address positionContract;
            // solhint-disable-next-line no-inline-assembly
            assembly {
                positionContract := div(mload(add(add(positionDescription, 0x20), offset)), 0x1000000000000000000000000)
            }
            // must be a LP token, not a pool
            address pool = curveRegistry.get_pool_from_lp_token(positionContract);
            if(pool == address(0x0)) return false;
        }
        return true;
    }

    /***************************************
    GOVERNANCE FUNCTIONS
    ***************************************/

    /**
     * @notice Changes the covered platform.
     * Can only be called by the current [**governor**](/docs/protocol/governance).
     * @dev Use this if the the protocol changes their registry but keeps the children contracts.
     * A new version of the protocol will likely require a new Product.
     * @param addressProvider_ The new Address Provider.
     */
    function setCoveredPlatform(address addressProvider_) public override {
        super.setCoveredPlatform(addressProvider_);
        _addressProvider = ICurveAddressProvider(addressProvider_);
    }
}
