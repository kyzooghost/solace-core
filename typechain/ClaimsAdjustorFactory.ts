/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ClaimsAdjustor } from "./ClaimsAdjustor";

export class ClaimsAdjustorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_registry: string, overrides?: Overrides): Promise<ClaimsAdjustor> {
    return super.deploy(_registry, overrides || {}) as Promise<ClaimsAdjustor>;
  }
  getDeployTransaction(
    _registry: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_registry, overrides || {});
  }
  attach(address: string): ClaimsAdjustor {
    return super.attach(address) as ClaimsAdjustor;
  }
  connect(signer: Signer): ClaimsAdjustorFactory {
    return super.connect(signer) as ClaimsAdjustorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimsAdjustor {
    return new Contract(address, _abi, signerOrProvider) as ClaimsAdjustor;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_registry",
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
        name: "claimant",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimApproved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_claimant",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approveClaim",
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
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "contract IRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161038d38038061038d83398101604081905261002f91610062565b60008054336001600160a01b031991821617909155600180549091166001600160a01b0392909216919091179055610090565b600060208284031215610073578081fd5b81516001600160a01b0381168114610089578182fd5b9392505050565b6102ee8061009f6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80635aa6e675146100465780637b10399914610064578063f2ad79081461006c575b600080fd5b61004e610081565b60405161005b919061023c565b60405180910390f35b61004e610090565b61007f61007a366004610211565b61009f565b005b6000546001600160a01b031681565b6001546001600160a01b031681565b6000546001600160a01b031633146100d25760405162461bcd60e51b81526004016100c990610269565b60405180910390fd5b6001546040805163fbfa77cf60e01b815290516000926001600160a01b03169163fbfa77cf91600480830192602092919082900301818787803b15801561011857600080fd5b505af115801561012c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015091906101ee565b604051631bff085760e21b81529091506001600160a01b03821690636ffc215c906101819086908690600401610250565b600060405180830381600087803b15801561019b57600080fd5b505af11580156101af573d6000803e3d6000fd5b50506040518492506001600160a01b03861691507f308187387164507a01d4463583bc3e8760529edc45d573acc02ed018bd4ac27690600090a3505050565b6000602082840312156101ff578081fd5b815161020a816102a0565b9392505050565b60008060408385031215610223578081fd5b823561022e816102a0565b946020939093013593505050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6020808252600b908201527f21676f7665726e616e6365000000000000000000000000000000000000000000604082015260600190565b6001600160a01b03811681146102b557600080fd5b5056fea264697066735822122041f96e78244c1e7580f9038180cca9498a696351086a686904c1ca759d2c979764736f6c63430008000033";
