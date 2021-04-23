/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniswapLpFarm } from "./UniswapLpFarm";

export class UniswapLpFarmFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _master: string,
    _stakeToken: string,
    _rewardToken: string,
    _startBlock: BigNumberish,
    _endBlock: BigNumberish,
    _pool: string,
    overrides?: Overrides
  ): Promise<UniswapLpFarm> {
    return super.deploy(
      _master,
      _stakeToken,
      _rewardToken,
      _startBlock,
      _endBlock,
      _pool,
      overrides || {}
    ) as Promise<UniswapLpFarm>;
  }
  getDeployTransaction(
    _master: string,
    _stakeToken: string,
    _rewardToken: string,
    _startBlock: BigNumberish,
    _endBlock: BigNumberish,
    _pool: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _master,
      _stakeToken,
      _rewardToken,
      _startBlock,
      _endBlock,
      _pool,
      overrides || {}
    );
  }
  attach(address: string): UniswapLpFarm {
    return super.attach(address) as UniswapLpFarm;
  }
  connect(signer: Signer): UniswapLpFarmFactory {
    return super.connect(signer) as UniswapLpFarmFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapLpFarm {
    return new Contract(address, _abi, signerOrProvider) as UniswapLpFarm;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_master",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakeToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "accRewardPerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
    ],
    name: "appraise",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "blockReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "countDeposited",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "endBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "farmType",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getDeposited",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastRewardBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTick",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "listDeposited",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken",
    outputs: [
      {
        internalType: "contract IUniswapLpToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "master",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256",
      },
    ],
    name: "setEnd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
    ],
    name: "setGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_blockReward",
        type: "uint256",
      },
    ],
    name: "setRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tickSpacing",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenInfo",
    outputs: [
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateFarm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "unpaidRewards",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "valueStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260026000553480156200001657600080fd5b50604051620034a9380380620034a9833981016040819052620000399162000469565b600f80546001600160a01b03199081166001600160a01b038981169190911790925560018054821688841690811790915560028054831690911790556003805490911691861691909117905560058390556006829055620000a7438462000404602090811b620019ca17901c565b600755600e80546001600160a01b03199081163317909155601080546001600160a01b0384811691909316179081905560408051630dfe168160e01b815290519190921691630dfe1681916004808301926020929190829003018186803b1580156200011257600080fd5b505afa15801562000127573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200014d91906200044a565b601180546001600160a01b0319166001600160a01b039283161790556010546040805163d21220a760e01b81529051919092169163d21220a7916004808301926020929190829003018186803b158015620001a757600080fd5b505afa158015620001bc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001e291906200044a565b601280546001600160a01b0319166001600160a01b039283161790556010546040805163ddca3f4360e01b81529051919092169163ddca3f43916004808301926020929190829003018186803b1580156200023c57600080fd5b505afa15801562000251573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002779190620005a6565b601260146101000a81548162ffffff021916908362ffffff160217905550601060009054906101000a90046001600160a01b03166001600160a01b031663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b158015620002e457600080fd5b505afa158015620002f9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200031f9190620004e5565b601260176101000a81548162ffffff021916908360020b62ffffff160217905550601060009054906101000a90046001600160a01b03166001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b1580156200038f57600080fd5b505afa158015620003a4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003ca919062000502565b50506012805460029590950b62ffffff16600160d01b0262ffffff60d01b199095169490941790935550620005e498505050505050505050565b60008183101562000416578162000418565b825b9392505050565b8051600281900b81146200043257600080fd5b919050565b805161ffff811681146200043257600080fd5b6000602082840312156200045c578081fd5b81516200041881620005cb565b60008060008060008060c0878903121562000482578182fd5b86516200048f81620005cb565b6020880151909650620004a281620005cb565b6040880151909550620004b581620005cb565b80945050606087015192506080870151915060a0870151620004d781620005cb565b809150509295509295509295565b600060208284031215620004f7578081fd5b62000418826200041f565b600080600080600080600060e0888a0312156200051d578081fd5b87516200052a81620005cb565b96506200053a602089016200041f565b95506200054a6040890162000437565b94506200055a6060890162000437565b93506200056a6080890162000437565b925060a088015160ff8116811462000580578182fd5b60c0890151909250801515811462000596578182fd5b8091505092959891949750929550565b600060208284031215620005b8578081fd5b815162ffffff8116811462000418578182fd5b6001600160a01b0381168114620005e157600080fd5b50565b612eb580620005f46000396000f3fe608060405234801561001057600080fd5b506004361061020b5760003560e01c806371a8261c1161012a578063c7b8981c116100bd578063ddca3f431161008c578063f54ca63c11610071578063f54ca63c146103ff578063f56ff92814610407578063f7c618c11461041a5761020b565b8063ddca3f43146103e2578063ee97f7f3146103f75761020b565b8063c7b8981c146103a6578063cc33c875146103ae578063d0c93a7c146103d2578063d21220a7146103da5761020b565b8063a9f8d181116100f9578063a9f8d18114610365578063ab033ea91461036d578063b6b55f2514610380578063c7a29c6f146103935761020b565b806371a8261c146103165780637f498ffc146103375780638dbb1e3a1461034a578063939d62371461035d5761020b565b806331d7a262116101a25780635aa6e675116101715780635aa6e675146102dd5780635da6b656146102e55780635fcbd285146103065780636ae5b46a1461030e5761020b565b806331d7a262146102a55780633dfa5d87146102b857806348cd4cb1146102cd57806351ed6a30146102d55761020b565b80631959a002116101de5780631959a00214610253578063214a712f146102755780632e1a7d4d146102885780632ebed9ec1461029d5761020b565b8063083c6323146102105780630ac168a11461022e5780630dfe16811461023657806316f0115b1461024b575b600080fd5b610218610422565b60405161022591906129ba565b60405180910390f35b610218610428565b61023e61042e565b604051610225919061271e565b61023e61043d565b6102666102613660046124a9565b61044c565b604051610225939291906129d1565b6102186102833660046124a9565b61046d565b61029b610296366004612598565b610496565b005b610218610857565b6102186102b33660046124a9565b61085d565b6102c061090e565b60405161022591906127b7565b61021861091e565b61023e610924565b61023e610933565b6102f86102f33660046124a9565b610942565b604051610225929190612792565b61023e610ad3565b610218610ae2565b6103296103243660046124c5565b610ae8565b6040516102259291906129c3565b61029b610345366004612598565b610b2c565b6102186103583660046125c8565b610b63565b610218610bb9565b610218610bbf565b61029b61037b3660046124a9565b610bc5565b61029b61038e366004612598565b610c1e565b61029b6103a1366004612598565b611128565b61029b61115f565b6103c16103bc366004612598565b61119d565b604051610225959493929190612756565b6102c06111e4565b61023e6111f4565b6103ea611203565b60405161022591906129aa565b61023e611215565b61029b611224565b610218610415366004612598565b61189d565b61023e6119bb565b60065481565b60045481565b6011546001600160a01b031681565b6010546001600160a01b031681565b600a6020526000908152604090208054600182015460029092015490919083565b6001600160a01b038116600090815260136020526040812061048e906119e3565b90505b919050565b61049e6119ee565b336000818152600a60209081526040808320858452600d835292819020815160a08101835281546001600160a01b038116808352600160a01b8204600290810b810b810b96840196909652600160b81b909104850b850b850b9382019390935260018201546001600160801b03166060820152920154608083015291929091146105435760405162461bcd60e51b815260040161053a906128a8565b60405180910390fd5b6012601a9054906101000a900460020b60020b816020015160020b131580156105845750806040015160020b6012601a9054906101000a900460020b60020b125b156105c35780608001518260000160008282546105a19190612d38565b90915550506080810151600980546000906105bd908490612d38565b90915550505b600854825464e8d4a51000916105d891612c93565b6105e29190612ae4565b60018301553360009081526013602052604090206106009084611b1e565b50602080820151600290810b900b6000908152600b909152604090206106299060010184611b1e565b508060800151600b6000836020015160020b60020b8152602001908152602001600020600001600082825461065e9190612cf9565b9250508190555061068d600b6000836020015160020b60020b81526020019081526020016000206001016119e3565b6106af5760208101516012546106af91600c91600160b81b900460020b611b2a565b604080820151600290810b900b6000908152600b602052206106d49060010184611b1e565b508060800151600b6000836040015160020b60020b815260200190815260200160002060000160008282546107099190612a2d565b9091555050604080820151600290810b900b6000908152600b60205220610732906001016119e3565b61075457604081015160125461075491600c91600160b81b900460020b611b2a565b6000838152600d602052604080822080547fffffffffffff00000000000000000000000000000000000000000000000000001681556001810180546fffffffffffffffffffffffffffffffff1916905560029081019290925590549051632142170760e11b81526001600160a01b03909116906342842e0e906107df90309033908890600401612732565b600060405180830381600087803b1580156107f957600080fd5b505af115801561080d573d6000803e3d6000fd5b50505050336001600160a01b03167f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243648460405161084a91906129ba565b60405180910390a2505050565b60005481565b6001600160a01b0381166000908152600a602052604081206008546007544311801561088a575060095415155b156108ca57600061089d60075443610b63565b6009549091506108b28264e8d4a51000612c93565b6108bc9190612ae4565b6108c69083612a6d565b9150505b60028201546001830154835464e8d4a51000906108e8908590612c93565b6108f29190612ae4565b6108fc9190612d38565b6109069190612a2d565b949350505050565b601254600160d01b900460020b81565b60055481565b6001546001600160a01b031681565b600e546001600160a01b031681565b6001600160a01b03811660009081526013602052604081206060918291610968906119e3565b905060008167ffffffffffffffff81111561099357634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156109bc578160200160208202803683370190505b50905060008267ffffffffffffffff8111156109e857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610a11578160200160208202803683370190505b50905060005b83811015610ac7576001600160a01b0387166000908152601360205260408120610a419083611b84565b6000818152600d60205260409020600201548551919250908290869085908110610a7b57634e487b7160e01b600052603260045260246000fd5b60200260200101818152505080848481518110610aa857634e487b7160e01b600052603260045260246000fd5b602002602001018181525050505080610ac090612dc2565b9050610a17565b50909350915050915091565b6002546001600160a01b031681565b60095481565b6001600160a01b038216600090815260136020526040812081908190610b0e9085611b84565b6000818152600d602052604090206002015490969095509350505050565b600e546001600160a01b03163314610b565760405162461bcd60e51b815260040161053a9061283a565b610b5e611224565b600655565b600080610b72846005546119ca565b90506000610b8284600654611b90565b905080821115610b9757600092505050610bb3565b600454610ba48383612d38565b610bae9190612c93565b925050505b92915050565b60085481565b60075481565b600e546001600160a01b03163314610bef5760405162461bcd60e51b815260040161053a9061283a565b600e805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b610c266119ee565b336000908152600a6020526040808220600254915163133f757160e31b8152909291829182918291829182916001600160a01b03909116906399fbab8890610c72908b906004016129ba565b6101806040518083038186803b158015610c8b57600080fd5b505afa158015610c9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc391906125e9565b5050601154979f50959d50939b509199509750955050506001600160a01b03808a169116149150508015610d0457506012546001600160a01b038681169116145b8015610d20575060125462ffffff858116600160a01b90920416145b610d3c5760405162461bcd60e51b815260040161053a90612871565b60006040518060a00160405280336001600160a01b031681526020018560020b81526020018460020b8152602001836001600160801b03168152602001610d84848787611b9f565b905260008a8152600d602090815260409182902083518154928501518585015173ffffffffffffffffffffffffffffffffffffffff199094166001600160a01b03928316177fffffffffffffffffff000000ffffffffffffffffffffffffffffffffffffffff16600160a01b600292830b62ffffff90811691909102919091177fffffffffffff000000ffffffffffffffffffffffffffffffffffffffffffffff16600160b81b95830b919091169490940293909317825560608501516001830180546fffffffffffffffffffffffffffffffff19166001600160801b03909216919091179055608085015191830191909155905491516323b872dd60e01b815292935016906323b872dd90610ea290339030908e90600401612732565b600060405180830381600087803b158015610ebc57600080fd5b505af1158015610ed0573d6000803e3d6000fd5b505050506012601a9054906101000a900460020b60020b816020015160020b13158015610f155750806040015160020b6012601a9054906101000a900460020b60020b125b15610f54578060800151886000016000828254610f329190612a6d565b9091555050608081015160098054600090610f4e908490612a6d565b90915550505b600854885464e8d4a5100091610f6991612c93565b610f739190612ae4565b6001890155336000908152601360205260409020610f91908a611c2b565b50610fba600b6000836020015160020b60020b81526020019081526020016000206001016119e3565b610fdc576020810151601254610fdc91600c91600160b81b900460020b611b2a565b602080820151600290810b900b6000908152600b90915260409020611004906001018a611c2b565b508060800151600b6000836020015160020b60020b815260200190815260200160002060000160008282546110399190612a2d565b9091555050604080820151600290810b900b6000908152600b60205220611062906001016119e3565b61108457604081015160125461108491600c91600160b81b900460020b611b2a565b604080820151600290810b900b6000908152600b602052206110a9906001018a611c2b565b508060800151600b6000836040015160020b60020b815260200190815260200160002060000160008282546110de9190612cf9565b909155505060405133907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c90611115908c906129ba565b60405180910390a2505050505050505050565b600f546001600160a01b031633146111525760405162461bcd60e51b815260040161053a90612973565b61115a611224565b600455565b6111676119ee565b336000908152600a60205260409020600854815464e8d4a510009161118b91612c93565b6111959190612ae4565b600190910155565b600d602052600090815260409020805460018201546002928301546001600160a01b03831693600160a01b8404810b93600160b81b9004900b916001600160801b03169085565b601254600160b81b900460020b81565b6012546001600160a01b031681565b601254600160a01b900462ffffff1681565b600f546001600160a01b031681565b60075443116112325761189b565b600061124060075443610b63565b905060095460001461127f5760095461125e8264e8d4a51000612c93565b6112689190612ae4565b600860008282546112799190612a6d565b90915550505b61128b43600654611b90565b60075560125460105460408051633850c7bd60e01b81529051600160d01b90930460020b926000926001600160a01b031691633850c7bd9160048083019260e0929190829003018186803b1580156112e257600080fd5b505afa1580156112f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131a919061250a565b50505050509150508060020b8260020b14156113385750505061189b565b6009545b8160020b8360020b12156115ae57601254600090819061136b90600c908790600160b81b900460020b84611c37565b9150915080158061138157508360020b8260020b135b156113905783945050506115ae565b600282810b900b6000908152600b60205260409020546113b1908490611df3565b600283810b900b6000908152600b602052604081209194506001909101906113d8826119e3565b905060005b818110156115a15760006113f18483611b84565b6000818152600d6020908152604091829020825160a08101845281546001600160a01b0381168252600160a01b8104600290810b810b810b948301859052600160b81b909104810b810b810b9482019490945260018201546001600160801b0316606082015290830154608082015292935088820b910b14156114f557608081015181516001600160a01b03166000908152600a60205260408120805490919061149c908490612a6d565b9091555050600854608082015164e8d4a51000916114b991612c93565b6114c39190612ae4565b81516001600160a01b03166000908152600a6020526040812060020180549091906114ef908490612cf9565b90915550505b806040015160020b8760020b141561158e57608081015181516001600160a01b03166000908152600a602052604081208054909190611535908490612d38565b9091555050600854608082015164e8d4a510009161155291612c93565b61155c9190612ae4565b81516001600160a01b03166000908152600a602052604081206002018054909190611588908490612a2d565b90915550505b50508061159a90612dc2565b90506113dd565b508396505050505061133c565b60015b8260020b8460020b1315611855576000816115d6576115d1600186612cb2565b6115d8565b845b905081156115e557600091505b601254600090819061160790600c908590600160b81b900460020b6001611c37565b9150915080158061161d57508560020b8260020b125b1561162d57859650505050611855565b600282810b900b6000908152600b602052604090205461165790869061165290612e21565b611df3565b600283810b900b6000908152600b6020526040812091965060019091019061167e826119e3565b905060005b818110156118475760006116978483611b84565b6000818152600d6020908152604091829020825160a08101845281546001600160a01b0381168252600160a01b8104600290810b810b810b94830194909452600160b81b9004830b830b830b93810184905260018201546001600160801b0316606082015290820154608082015292935088810b91900b141561179b57608081015181516001600160a01b03166000908152600a602052604081208054909190611742908490612a6d565b9091555050600854608082015164e8d4a510009161175f91612c93565b6117699190612ae4565b81516001600160a01b03166000908152600a602052604081206002018054909190611795908490612cf9565b90915550505b806020015160020b8760020b141561183457608081015181516001600160a01b03166000908152600a6020526040812080549091906117db908490612d38565b9091555050600854608082015164e8d4a51000916117f891612c93565b6118029190612ae4565b81516001600160a01b03166000908152600a60205260408120600201805490919061182e908490612a2d565b90915550505b50508061184090612dc2565b9050611683565b5083985050505050506115b1565b50600955506012805460029290920b62ffffff16600160d01b027fffffff000000ffffffffffffffffffffffffffffffffffffffffffffffffffff909216919091179055505b565b60025460405163133f757160e31b81526000918291829182918291829182916001600160a01b0316906399fbab88906118da908b906004016129ba565b6101806040518083038186803b1580156118f357600080fd5b505afa158015611907573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061192b91906125e9565b5050601154979f50959d50939b509199509750955050506001600160a01b03808a16911614915050801561196c57506012546001600160a01b038681169116145b8015611988575060125462ffffff858116600160a01b90920416145b6119a45760405162461bcd60e51b815260040161053a90612871565b6119af818484611b9f565b98975050505050505050565b6003546001600160a01b031681565b6000818310156119da57816119dc565b825b9392505050565b600061048e82611e1e565b6119f6611224565b336000908152600a6020526040812060028101546001820154600854835493949364e8d4a5100091611a2791612c93565b611a319190612ae4565b611a3b9190612d38565b611a459190612a2d565b905080611a5357505061189b565b600354600f546040516370a0823160e01b81526000926001600160a01b03908116926370a0823192611a8b929091169060040161271e565b60206040518083038186803b158015611aa357600080fd5b505afa158015611ab7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611adb91906125b0565b90506000611ae98383611b90565b9050611af58184612d38565b6002850155600f54600354611b18916001600160a01b0391821691163384611e22565b50505050565b60006119dc8383611ea7565b611b348183612ddd565b60020b15611b4157600080fd5b600080611b56611b518486612aaa565b611fc4565b600191820b820b60009081526020979097526040909620805460ff9097169190911b90951890945550505050565b60006119dc8383611fe1565b60008183106119da57816119dc565b600080611bac8484612cb2565b60020b9050611bc4816001600160801b038716612c93565b9150614e20811115611c2357611bdd6002619c40612b3e565b6002611beb614e2084612d38565b611bf59190612b3e565b611bff9190612a6d565b611c0c6002619c40612b3e565b611c169084612c93565b611c209190612ae4565b91505b509392505050565b60006119dc838361203a565b60008080611c458587612aaa565b905060008660020b128015611c655750611c5f8587612ddd565b60020b15155b15611c785780611c7481612d9e565b9150505b8315611d2757600080611c8a83611fc4565b90925090506000600160ff831681901b90611ca59082612d38565b611caf9190612a6d565b600184810b900b600090815260208c905260409020548116801515965090915085611cf15788611ce260ff851687612cb2565b611cec9190612c0a565b611d1c565b88611cfb82612084565b611d059085612d4f565b611d129060ff1687612cb2565b611d1c9190612c0a565b965050505050611de9565b600080611d38611b518460016129e7565b90925090506000611d50600160ff841681901b612d38565b600184810b900b600090815260208c905260409020549019908116801515965090915085611dab5788611d848460ff612d4f565b60ff16611d928760016129e7565b611d9c91906129e7565b611da69190612c0a565b611de2565b8883611db683612181565b611dc09190612d4f565b60ff16611dce8760016129e7565b611dd891906129e7565b611de29190612c0a565b9650505050505b5094509492505050565b6000808213611e1457611e0582612e21565b611e0f9084612d38565b6119dc565b6119dc8284612a6d565b5490565b611b18846323b872dd60e01b858585604051602401611e4393929190612732565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526122ac565b60008181526001830160205260408120548015611fba576000611ecb600183612d38565b8554909150600090611edf90600190612d38565b90506000866000018281548110611f0657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080876000018481548110611f3757634e487b7160e01b600052603260045260246000fd5b600091825260209091200155611f4e836001612a6d565b60008281526001890160205260409020558654879080611f7e57634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610bb3565b6000915050610bb3565b600281900b60081d6000611fda61010084612dff565b9050915091565b815460009082106120045760405162461bcd60e51b815260040161053a906127f8565b82600001828154811061202757634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b60006120468383612340565b61207c57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610bb3565b506000610bb3565b600080821161209257600080fd5b70010000000000000000000000000000000082106120bd57608091821c916120ba9082612a85565b90505b6801000000000000000082106120e057604091821c916120dd9082612a85565b90505b64010000000082106120ff57602091821c916120fc9082612a85565b90505b62010000821061211c57601091821c916121199082612a85565b90505b610100821061213857600891821c916121359082612a85565b90505b6010821061215357600491821c916121509082612a85565b90505b6004821061216e57600291821c9161216b9082612a85565b90505b600282106104915761048e600182612a85565b600080821161218f57600080fd5b5060ff6001600160801b038216156121b3576121ac608082612d4f565b90506121bb565b608082901c91505b67ffffffffffffffff8216156121dd576121d6604082612d4f565b90506121e5565b604082901c91505b63ffffffff821615612203576121fc602082612d4f565b905061220b565b602082901c91505b61ffff82161561222757612220601082612d4f565b905061222f565b601082901c91505b60ff82161561224a57612243600882612d4f565b9050612252565b600882901c91505b600f82161561226d57612266600482612d4f565b9050612275565b600482901c91505b600382161561229057612289600282612d4f565b9050612298565b600282901c91505b60018216156104915761048e600182612d4f565b6000612301826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166123589092919063ffffffff16565b80519091501561233b578080602001905181019061231f91906124f0565b61233b5760405162461bcd60e51b815260040161053a90612916565b505050565b60009081526001919091016020526040902054151590565b606061090684846000858561236c85612401565b6123885760405162461bcd60e51b815260040161053a906128df565b600080866001600160a01b031685876040516123a49190612702565b60006040518083038185875af1925050503d80600081146123e1576040519150601f19603f3d011682016040523d82523d6000602084013e6123e6565b606091505b50915091506123f6828286612407565b979650505050505050565b3b151590565b606083156124165750816119dc565b8251156124265782518084602001fd5b8160405162461bcd60e51b815260040161053a91906127c5565b805161049181612e67565b8051801515811461049157600080fd5b8051600281900b811461049157600080fd5b80516001600160801b038116811461049157600080fd5b805161ffff8116811461049157600080fd5b805162ffffff8116811461049157600080fd5b6000602082840312156124ba578081fd5b81356119dc81612e67565b600080604083850312156124d7578081fd5b82356124e281612e67565b946020939093013593505050565b600060208284031215612501578081fd5b6119dc8261244b565b600080600080600080600060e0888a031215612524578283fd5b875161252f81612e67565b965061253d6020890161245b565b955061254b60408901612484565b945061255960608901612484565b935061256760808901612484565b925060a088015160ff8116811461257c578283fd5b915061258a60c0890161244b565b905092959891949750929550565b6000602082840312156125a9578081fd5b5035919050565b6000602082840312156125c1578081fd5b5051919050565b600080604083850312156125da578182fd5b50508035926020909101359150565b6000806000806000806000806000806000806101808d8f03121561260b578485fd5b8c516bffffffffffffffffffffffff81168114612626578586fd5b9b5061263460208e01612440565b9a5061264260408e01612440565b995061265060608e01612440565b985061265e60808e01612496565b975061266c60a08e0161245b565b965061267a60c08e0161245b565b955061268860e08e0161246d565b94506101008d015193506101208d015192506126a76101408e0161246d565b91506126b66101608e0161246d565b90509295989b509295989b509295989b565b6000815180845260208085019450808401835b838110156126f7578151875295820195908201906001016126db565b509495945050505050565b60008251612714818460208701612d72565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03959095168552600293840b60208601529190920b60408401526001600160801b039091166060830152608082015260a00190565b6000604082526127a560408301856126c8565b8281036020840152611c2081856126c8565b60029190910b815260200190565b60006020825282518060208401526127e4816040850160208701612d72565b601f01601f19169190910160400192915050565b60208082526022908201527f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e604082015261647360f01b606082015260800190565b6020808252600b908201527f21676f7665726e616e6365000000000000000000000000000000000000000000604082015260600190565b6020808252600a908201527f77726f6e6720706f6f6c00000000000000000000000000000000000000000000604082015260600190565b6020808252600e908201527f6e6f7420796f757220746f6b656e000000000000000000000000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b60208082526007908201527f216d617374657200000000000000000000000000000000000000000000000000604082015260600190565b62ffffff91909116815260200190565b90815260200190565b918252602082015260400190565b9283526020830191909152604082015260600190565b60008160020b8360020b82821282627fffff03821381151615612a0c57612a0c612e3b565b82627fffff19038212811615612a2457612a24612e3b565b50019392505050565b6000808212826001600160ff1b0303841381151615612a4e57612a4e612e3b565b600160ff1b8390038412811615612a6757612a67612e3b565b50500190565b60008219821115612a8057612a80612e3b565b500190565b600060ff821660ff84168060ff03821115612aa257612aa2612e3b565b019392505050565b60008160020b8360020b80612ac157612ac1612e51565b627fffff19821460001982141615612adb57612adb612e3b565b90059392505050565b600082612af357612af3612e51565b500490565b80825b6001808611612b0a5750612b35565b818704821115612b1c57612b1c612e3b565b80861615612b2957918102915b9490941c938002612afb565b94509492505050565b60006119dc60001960ff851684600082612b5a575060016119dc565b81612b67575060006119dc565b8160018114612b7d5760028114612b8757612bb4565b60019150506119dc565b60ff841115612b9857612b98612e3b565b6001841b915084821115612bae57612bae612e3b565b506119dc565b5060208310610133831016604e8410600b8410161715612be2575081810a83811115611e0f57611e0f612e3b565b612bef8484846001612af8565b808604821115612c0157612c01612e3b565b02949350505050565b60008160020b8360020b627fffff83821384841383830485118282161615612c3457612c34612e3b565b627fffff1986851282811687830587121615612c5257612c52612e3b565b878712925085820587128484161615612c6d57612c6d612e3b565b85850587128184161615612c8357612c83612e3b565b5050509290910295945050505050565b6000816000190483118215151615612cad57612cad612e3b565b500290565b60008160020b8360020b82811281627fffff1901831281151615612cd857612cd8612e3b565b81627fffff018313811615612cef57612cef612e3b565b5090039392505050565b60008083128015600160ff1b850184121615612d1757612d17612e3b565b836001600160ff1b03018313811615612d3257612d32612e3b565b50500390565b600082821015612d4a57612d4a612e3b565b500390565b600060ff821660ff841680821015612d6957612d69612e3b565b90039392505050565b60005b83811015612d8d578181015183820152602001612d75565b83811115611b185750506000910152565b60008160020b627fffff19811415612db857612db8612e3b565b6000190192915050565b6000600019821415612dd657612dd6612e3b565b5060010190565b60008260020b80612df057612df0612e51565b808360020b0791505092915050565b600062ffffff80841680612e1557612e15612e51565b92169190910692915050565b6000600160ff1b821415612e3757612e37612e3b565b0390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6001600160a01b0381168114612e7c57600080fd5b5056fea2646970667358221220f6894098ac7faff6a822bf01d59dddf81bfbe577a586ea9b5cf1df80a50a064f64736f6c63430008000033";
