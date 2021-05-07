/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ClaimsEscrow } from "./ClaimsEscrow";

export class ClaimsEscrowFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_registry: string, overrides?: Overrides): Promise<ClaimsEscrow> {
    return super.deploy(_registry, overrides || {}) as Promise<ClaimsEscrow>;
  }
  getDeployTransaction(
    _registry: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_registry, overrides || {});
  }
  attach(address: string): ClaimsEscrow {
    return super.attach(address) as ClaimsEscrow;
  }
  connect(signer: Signer): ClaimsEscrowFactory {
    return super.connect(signer) as ClaimsEscrowFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimsEscrow {
    return new Contract(address, _abi, signerOrProvider) as ClaimsEscrow;
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
        internalType: "uint256",
        name: "claimId",
        type: "uint256",
      },
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
    name: "ClaimWithdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claims",
    outputs: [
      {
        internalType: "address",
        name: "claimant",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "receivedAt",
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
    inputs: [
      {
        internalType: "address",
        name: "_claimant",
        type: "address",
      },
    ],
    name: "receiveClaim",
    outputs: [
      {
        internalType: "uint256",
        name: "claimId",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "claimId",
        type: "uint256",
      },
    ],
    name: "withdrawClaimsPayout",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105f73803806105f783398101604081905261002f91610065565b60008054336001600160a01b0319918216178255600280549091166001600160a01b039390931692909217909155600155610093565b600060208284031215610076578081fd5b81516001600160a01b038116811461008c578182fd5b9392505050565b610555806100a26000396000f3fe60806040526004361061005a5760003560e01c8063963063f411610043578063963063f41461009f578063a888c2cd146100bf578063ea0aa896146100ee5761005a565b80635aa6e6751461005f5780637b1039991461008a575b600080fd5b34801561006b57600080fd5b50610074610110565b6040516100819190610400565b60405180910390f35b34801561009657600080fd5b5061007461011f565b6100b26100ad3660046103a9565b61012e565b60405161008191906104da565b3480156100cb57600080fd5b506100df6100da3660046103e8565b61026c565b60405161008193929190610414565b3480156100fa57600080fd5b5061010e6101093660046103e8565b610297565b005b6000546001600160a01b031681565b6002546001600160a01b031681565b6002546040805163fbfa77cf60e01b815290516000926001600160a01b03169163fbfa77cf91600480830192602092919082900301818787803b15801561017457600080fd5b505af1158015610188573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ac91906103cc565b6001600160a01b0316336001600160a01b0316146101e55760405162461bcd60e51b81526004016101dc9061046c565b60405180910390fd5b60018054604080516060810182526001600160a01b03868116825234602080840191825242848601908152600087815260039092529481209351845473ffffffffffffffffffffffffffffffffffffffff191693169290921783555182860155915160029091015582549192918291906102609083906104e3565b90915550919392505050565b6003602052600090815260409020805460018201546002909201546001600160a01b03909116919083565b6000818152600360205260409020546001600160a01b031633146102cd5760405162461bcd60e51b81526004016101dc90610435565b6000818152600360205260409020600201546102ed9062127500906104e3565b42101561030c5760405162461bcd60e51b81526004016101dc906104a3565b600081815260036020526040808220600181018054825473ffffffffffffffffffffffffffffffffffffffff1916835590849055600290910183905590519091339183156108fc0291849190818181858888f19350505050158015610375573d6000803e3d6000fd5b506040518190339084907f98131a469190deca66117f3768bba4328c631613211a3cc4054efc6ee16cd42690600090a45050565b6000602082840312156103ba578081fd5b81356103c581610507565b9392505050565b6000602082840312156103dd578081fd5b81516103c581610507565b6000602082840312156103f9578081fd5b5035919050565b6001600160a01b0391909116815260200190565b6001600160a01b039390931683526020830191909152604082015260600190565b60208082526009908201527f21636c61696d616e740000000000000000000000000000000000000000000000604082015260600190565b60208082526006908201527f217661756c740000000000000000000000000000000000000000000000000000604082015260600190565b6020808252601f908201527f636f6f6c646f776e20706572696f6420686173206e6f7420656c617073656400604082015260600190565b90815260200190565b6000821982111561050257634e487b7160e01b81526011600452602481fd5b500190565b6001600160a01b038116811461051c57600080fd5b5056fea26469706673582212202cdb0f03700c6430090c3ac96ea48c4ad1b2e47e953dfb193b63530b59af943864736f6c63430008000033";
