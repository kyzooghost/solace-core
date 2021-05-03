/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Solace } from "./Solace";

export class SolaceFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_governance: string, overrides?: Overrides): Promise<Solace> {
    return super.deploy(_governance, overrides || {}) as Promise<Solace>;
  }
  getDeployTransaction(
    _governance: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_governance, overrides || {});
  }
  attach(address: string): Solace {
    return super.attach(address) as Solace;
  }
  connect(signer: Signer): SolaceFactory {
    return super.connect(signer) as SolaceFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Solace {
    return new Contract(address, _abi, signerOrProvider) as Solace;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_governance",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
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
    name: "minters",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "removeMinter",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610120523480156200003757600080fd5b50604051620017a2380380620017a28339810160408190526200005a9162000281565b60405180604001604052806006815260200165736f6c61636560d01b81525080604051806040016040528060018152602001603160f81b81525060405180604001604052806006815260200165736f6c61636560d01b81525060405180604001604052806006815260200165534f4c41434560d01b8152508160039080519060200190620000ea929190620001db565b50805162000100906004906020840190620001db565b5050825160208085019190912083519184019190912060c082905260e08190524660a0529091507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f620001558184846200019f565b608052610100525050600680546001600160a01b039095166001600160a01b0319909516851790555050506000908152600760205260409020805460ff191660011790556200031a565b60008383834630604051602001620001bc959493929190620002b1565b6040516020818303038152906040528051906020012090509392505050565b828054620001e990620002dd565b90600052602060002090601f0160209004810192826200020d576000855562000258565b82601f106200022857805160ff191683800117855562000258565b8280016001018555821562000258579182015b82811115620002585782518255916020019190600101906200023b565b50620002669291506200026a565b5090565b5b808211156200026657600081556001016200026b565b60006020828403121562000293578081fd5b81516001600160a01b0381168114620002aa578182fd5b9392505050565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b600281046001821680620002f257607f821691505b602082108114156200031457634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161010051610120516114386200036a600039600061070101526000610a3501526000610a7701526000610a56015260006109e301526000610a0c01526114386000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c806370a08231116100cd578063a9059cbb11610081578063d505accf11610066578063d505accf146102be578063dd62ed3e146102d1578063f46eccc4146102e45761016c565b8063a9059cbb14610298578063ab033ea9146102ab5761016c565b806395d89b41116100b257806395d89b411461026a578063983b2d5614610272578063a457c2d7146102855761016c565b806370a08231146102445780637ecebe00146102575761016c565b8063313ce567116101245780633950935111610109578063395093511461020957806340c10f191461021c5780635aa6e6751461022f5761016c565b8063313ce567146101ec5780633644e515146102015761016c565b806318160ddd1161015557806318160ddd146101af57806323b872dd146101c45780633092afd5146101d75761016c565b806306fdde0314610171578063095ea7b31461018f575b600080fd5b6101796102f7565b6040516101869190610f1c565b60405180910390f35b6101a261019d366004610e32565b61038a565b6040516101869190610e8a565b6101b76103a7565b6040516101869190610e95565b6101a26101d2366004610d86565b6103ad565b6101ea6101e5366004610d33565b61044d565b005b6101f4610498565b604051610186919061137a565b6101b761049d565b6101a2610217366004610e32565b6104ac565b6101ea61022a366004610e32565b6104fb565b610237610538565b6040516101869190610e76565b6101b7610252366004610d33565b610547565b6101b7610265366004610d33565b610566565b61017961058d565b6101ea610280366004610d33565b61059c565b6101a2610293366004610e32565b6105ea565b6101a26102a6366004610e32565b610665565b6101ea6102b9366004610d33565b610679565b6101ea6102cc366004610dc1565b6106dd565b6101b76102df366004610d54565b6107bf565b6101a26102f2366004610d33565b6107ea565b606060038054610306906113b7565b80601f0160208091040260200160405190810160405280929190818152602001828054610332906113b7565b801561037f5780601f106103545761010080835404028352916020019161037f565b820191906000526020600020905b81548152906001019060200180831161036257829003601f168201915b505050505090505b90565b600061039e6103976107ff565b8484610803565b50600192915050565b60025490565b60006103ba8484846108b7565b6001600160a01b0384166000908152600160205260408120816103db6107ff565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156104275760405162461bcd60e51b815260040161041e906111e8565b60405180910390fd5b610442856104336107ff565b61043d86856113a0565b610803565b506001949350505050565b6006546001600160a01b031633146104775760405162461bcd60e51b815260040161041e90611020565b6001600160a01b03166000908152600760205260409020805460ff19169055565b601290565b60006104a76109df565b905090565b600061039e6104b96107ff565b8484600160006104c76107ff565b6001600160a01b03908116825260208083019390935260409182016000908120918b168152925290205461043d9190611388565b3360009081526007602052604090205460ff1661052a5760405162461bcd60e51b815260040161041e90610fa6565b6105348282610aa2565b5050565b6006546001600160a01b031681565b6001600160a01b0381166000908152602081905260409020545b919050565b6001600160a01b038116600090815260056020526040812061058790610b62565b92915050565b606060048054610306906113b7565b6006546001600160a01b031633146105c65760405162461bcd60e51b815260040161041e90611020565b6001600160a01b03166000908152600760205260409020805460ff19166001179055565b600080600160006105f96107ff565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156106455760405162461bcd60e51b815260040161041e906112e6565b61065b6106506107ff565b8561043d86856113a0565b5060019392505050565b600061039e6106726107ff565b84846108b7565b6006546001600160a01b031633146106a35760405162461bcd60e51b815260040161041e90611020565b600680547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b834211156106fd5760405162461bcd60e51b815260040161041e90611099565b60007f000000000000000000000000000000000000000000000000000000000000000088888861072c8c610b66565b8960405160200161074296959493929190610e9e565b604051602081830303815290604052805190602001209050600061076582610b98565b9050600061077582878787610bab565b9050896001600160a01b0316816001600160a01b0316146107a85760405162461bcd60e51b815260040161041e906111b1565b6107b38a8a8a610803565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60076020526000908152604090205460ff1681565b3390565b6001600160a01b0383166108295760405162461bcd60e51b815260040161041e906112a2565b6001600160a01b03821661084f5760405162461bcd60e51b815260040161041e90611057565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906108aa908590610e95565b60405180910390a3505050565b6001600160a01b0383166108dd5760405162461bcd60e51b815260040161041e90611245565b6001600160a01b0382166109035760405162461bcd60e51b815260040161041e90610fdd565b61090e838383610ca1565b6001600160a01b038316600090815260208190526040902054818110156109475760405162461bcd60e51b815260040161041e906110d0565b61095182826113a0565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610987908490611388565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109d19190610e95565b60405180910390a350505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461415610a3057507f0000000000000000000000000000000000000000000000000000000000000000610387565b610a9b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610ca6565b9050610387565b6001600160a01b038216610ac85760405162461bcd60e51b815260040161041e90611343565b610ad460008383610ca1565b8060026000828254610ae69190611388565b90915550506001600160a01b03821660009081526020819052604081208054839290610b13908490611388565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610b56908590610e95565b60405180910390a35050565b5490565b6001600160a01b0381166000908152600560205260408120610b8781610b62565b9150610b9281610ce0565b50919050565b6000610587610ba56109df565b83610ce9565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610bed5760405162461bcd60e51b815260040161041e9061112d565b8360ff16601b1480610c0257508360ff16601c145b610c1e5760405162461bcd60e51b815260040161041e9061116f565b600060018686868660405160008152602001604052604051610c439493929190610efe565b6020604051602081039080840390855afa158015610c65573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610c985760405162461bcd60e51b815260040161041e90610f6f565b95945050505050565b505050565b60008383834630604051602001610cc1959493929190610ed2565b6040516020818303038152906040528051906020012090509392505050565b80546001019055565b60008282604051602001610cfe929190610e5b565b60405160208183030381529060405280519060200120905092915050565b80356001600160a01b038116811461056157600080fd5b600060208284031215610d44578081fd5b610d4d82610d1c565b9392505050565b60008060408385031215610d66578081fd5b610d6f83610d1c565b9150610d7d60208401610d1c565b90509250929050565b600080600060608486031215610d9a578081fd5b610da384610d1c565b9250610db160208501610d1c565b9150604084013590509250925092565b600080600080600080600060e0888a031215610ddb578283fd5b610de488610d1c565b9650610df260208901610d1c565b95506040880135945060608801359350608088013560ff81168114610e15578384fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610e44578182fd5b610e4d83610d1c565b946020939093013593505050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b81811015610f4857858101830151858201604001528201610f2c565b81811115610f595783604083870101525b50601f01601f1916929092016040019392505050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526007908201527f216d696e74657200000000000000000000000000000000000000000000000000604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b6020808252600b908201527f21676f7665726e616e6365000000000000000000000000000000000000000000604082015260600190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601d908201527f45524332305065726d69743a206578706972656420646561646c696e65000000604082015260600190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408201527f616c616e63650000000000000000000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601e908201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604082015260600190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160408201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408201527f207a65726f000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b60ff91909116815260200190565b6000821982111561139b5761139b6113ec565b500190565b6000828210156113b2576113b26113ec565b500390565b6002810460018216806113cb57607f821691505b60208210811415610b9257634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fdfea2646970667358221220096be8983150f9f39c562e91c3650c9b48469bdd21df4a002f596c24dc1658c464736f6c63430008000033";
