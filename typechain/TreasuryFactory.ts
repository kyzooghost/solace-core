/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Treasury } from "./Treasury";

export class TreasuryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _solace: string,
    _uniRouter: string,
    _weth: string,
    overrides?: Overrides
  ): Promise<Treasury> {
    return super.deploy(
      _solace,
      _uniRouter,
      _weth,
      overrides || {}
    ) as Promise<Treasury>;
  }
  getDeployTransaction(
    _solace: string,
    _uniRouter: string,
    _weth: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _solace,
      _uniRouter,
      _weth,
      overrides || {}
    );
  }
  attach(address: string): Treasury {
    return super.attach(address) as Treasury;
  }
  connect(signer: Signer): TreasuryFactory {
    return super.connect(signer) as TreasuryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Treasury {
    return new Contract(address, _abi, signerOrProvider) as Treasury;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract SOLACE",
        name: "_solace",
        type: "address",
      },
      {
        internalType: "address",
        name: "_uniRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
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
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "DepositEth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "DepositToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_path",
        type: "bytes",
      },
    ],
    name: "PathSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "Spend",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "depositEth",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositToken",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "paths",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_path",
        type: "bytes",
      },
    ],
    name: "setPath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "solace",
    outputs: [
      {
        internalType: "contract SOLACE",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "spend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
    outputs: [
      {
        internalType: "contract IWETH10",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161114538038061114583398101604081905261002f9161007e565b600080546001600160a01b039485166001600160a01b031991821617909155600280549385169382169390931790925560038054919093169082161790915560018054909116331790556100e2565b600080600060608486031215610092578283fd5b835161009d816100ca565b60208501519093506100ae816100ca565b60408501519092506100bf816100ca565b809150509250925092565b6001600160a01b03811681146100df57600080fd5b50565b611054806100f16000396000f3fe6080604052600436106100c05760003560e01c8063599e461011610074578063ab033ea91161004e578063ab033ea9146101b6578063af90c353146101d6578063e3f1fa73146101f6576100cf565b8063599e46101461015f5780635aa6e6751461018c578063a0e47bf6146101a1576100cf565b80633ef8d97e116100a55780633ef8d97e146101175780633fc8cef314610142578063439370b114610157576100cf565b806303438dd0146100d7578063338b5dea146100f7576100cf565b366100cf576100cd610216565b005b6100cd610216565b3480156100e357600080fd5b506100cd6100f2366004610bb4565b6102d0565b34801561010357600080fd5b506100cd610112366004610c4c565b61032b565b34801561012357600080fd5b5061012c610387565b6040516101399190610d30565b60405180910390f35b34801561014e57600080fd5b5061012c610396565b6100cd6103a5565b34801561016b57600080fd5b5061017f61017a366004610bb4565b6103af565b6040516101399190610de3565b34801561019857600080fd5b5061012c610449565b3480156101ad57600080fd5b5061012c610458565b3480156101c257600080fd5b506100cd6101d1366004610bb4565b610467565b3480156101e257600080fd5b506100cd6101f1366004610bce565b6104cb565b34801561020257600080fd5b506100cd610211366004610c75565b6105f0565b600360009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0476040518263ffffffff1660e01b81526004016000604051808303818588803b15801561026657600080fd5b505af115801561027a573d6000803e3d6000fd5b505060035461029693506001600160a01b031691506106619050565b507f4839e169884e5c5250ffc9f75cde6cbf044bddb2b1a5c885df8591da473f0382346040516102c69190610fae565b60405180910390a1565b6001546001600160a01b031633146103035760405162461bcd60e51b81526004016102fa90610df6565b60405180910390fd5b61030c81610661565b6103285760405162461bcd60e51b81526004016102fa90610f1e565b50565b6103406001600160a01b0383163330846108ae565b61034982610661565b507f2d0c0a8842b9944ece1495eb61121621b5e36bd6af3bba0318c695f525aef79f828260405161037b929190610da7565b60405180910390a15050565b6000546001600160a01b031681565b6003546001600160a01b031681565b6103ad610216565b565b600460205260009081526040902080546103c890610fe3565b80601f01602080910402602001604051908101604052809291908181526020018280546103f490610fe3565b80156104415780601f1061041657610100808354040283529160200191610441565b820191906000526020600020905b81548152906001019060200180831161042457829003601f168201915b505050505081565b6001546001600160a01b031681565b6002546001600160a01b031681565b6001546001600160a01b031633146104915760405162461bcd60e51b81526004016102fa90610df6565b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6001546001600160a01b031633146104f55760405162461bcd60e51b81526004016102fa90610df6565b6001600160a01b0383166000908152600460205260409020610518908383610b04565b506002546001600160a01b038085169163095ea7b39116831561053d57600019610540565b60005b6040518363ffffffff1660e01b815260040161055d929190610da7565b602060405180830381600087803b15801561057757600080fd5b505af115801561058b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105af9190610cb0565b507fdcf1c9f13bfac49d2cb9c41a5ace1ada6fd1335bcd05688595438bb3e32162d18383836040516105e393929190610d68565b60405180910390a1505050565b6001546001600160a01b0316331461061a5760405162461bcd60e51b81526004016102fa90610df6565b61062e6001600160a01b0384168284610939565b7fc1a70bd718b380a0ced1a788ff14d1299c25937844fb8d451e105c25e23a367e8383836040516105e393929190610dc0565b6001600160a01b0381166000908152600460205260408120805482919061068790610fe3565b80601f01602080910402602001604051908101604052809291908181526020018280546106b390610fe3565b80156107005780601f106106d557610100808354040283529160200191610700565b820191906000526020600020905b8154815290600101906020018083116106e357829003601f168201915b5050505050905080516000141561071b5760009150506108a9565b6040516370a0823160e01b81526000906001600160a01b038516906370a082319061074a903090600401610d30565b60206040518083038186803b15801561076257600080fd5b505afa158015610776573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079a9190610cd0565b6040805160a08101825284815230602082015242818301526060810183905260006080820181905291519293509163c04b8d5960e01b906107df908490602401610f55565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925260025491519092506001600160a01b039091169061085d908390610d14565b6000604051808303816000865af19150503d806000811461089a576040519150601f19603f3d011682016040523d82523d6000602084013e61089f565b606091505b5090955050505050505b919050565b610933846323b872dd60e01b8585856040516024016108cf93929190610d44565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261095d565b50505050565b6109588363a9059cbb60e01b84846040516024016108cf929190610da7565b505050565b60006109b2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166109ec9092919063ffffffff16565b80519091501561095857808060200190518101906109d09190610cb0565b6109585760405162461bcd60e51b81526004016102fa90610ec1565b60606109fb8484600085610a05565b90505b9392505050565b606082471015610a275760405162461bcd60e51b81526004016102fa90610e2d565b610a3085610ac5565b610a4c5760405162461bcd60e51b81526004016102fa90610e8a565b600080866001600160a01b03168587604051610a689190610d14565b60006040518083038185875af1925050503d8060008114610aa5576040519150601f19603f3d011682016040523d82523d6000602084013e610aaa565b606091505b5091509150610aba828286610acb565b979650505050505050565b3b151590565b60608315610ada5750816109fe565b825115610aea5782518084602001fd5b8160405162461bcd60e51b81526004016102fa9190610de3565b828054610b1090610fe3565b90600052602060002090601f016020900481019282610b325760008555610b78565b82601f10610b4b5782800160ff19823516178555610b78565b82800160010185558215610b78579182015b82811115610b78578235825591602001919060010190610b5d565b50610b84929150610b88565b5090565b5b80821115610b845760008155600101610b89565b80356001600160a01b03811681146108a957600080fd5b600060208284031215610bc5578081fd5b6109fe82610b9d565b600080600060408486031215610be2578182fd5b610beb84610b9d565b9250602084013567ffffffffffffffff80821115610c07578384fd5b818601915086601f830112610c1a578384fd5b813581811115610c28578485fd5b876020828501011115610c39578485fd5b6020830194508093505050509250925092565b60008060408385031215610c5e578182fd5b610c6783610b9d565b946020939093013593505050565b600080600060608486031215610c89578283fd5b610c9284610b9d565b925060208401359150610ca760408501610b9d565b90509250925092565b600060208284031215610cc1578081fd5b815180151581146109fe578182fd5b600060208284031215610ce1578081fd5b5051919050565b60008151808452610d00816020860160208601610fb7565b601f01601f19169290920160200192915050565b60008251610d26818460208701610fb7565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001600160a01b03851682526040602083015282604083015282846060840137818301606090810191909152601f909201601f1916010192915050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393841681526020810192909252909116604082015260600190565b6000602082526109fe6020830184610ce8565b6020808252600b908201527f21676f7665726e616e6365000000000000000000000000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b6020808252600b908201527f73776170206661696c6564000000000000000000000000000000000000000000604082015260600190565b600060208252825160a06020840152610f7160c0840182610ce8565b90506001600160a01b0360208501511660408401526040840151606084015260608401516080840152608084015160a08401528091505092915050565b90815260200190565b60005b83811015610fd2578181015183820152602001610fba565b838111156109335750506000910152565b600281046001821680610ff757607f821691505b6020821081141561101857634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220429463755b22fd01e5ceb430b5e9a10645303c7f74dfe133ad1bba415774506d64736f6c63430008000033";
