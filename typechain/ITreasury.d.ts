/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ITreasuryInterface extends ethers.utils.Interface {
  functions: {
    "acceptGovernance()": FunctionFragment;
    "depositEth()": FunctionFragment;
    "depositToken(address,uint256)": FunctionFragment;
    "governance()": FunctionFragment;
    "newGovernance()": FunctionFragment;
    "setGovernance(address)": FunctionFragment;
    "setPath(address,bytes)": FunctionFragment;
    "spend(address,uint256,address)": FunctionFragment;
    "swap(bytes,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositEth",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGovernance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPath",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "spend",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "newGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPath", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {
    "EthDeposited(uint256)": EventFragment;
    "FundsSpent(address,uint256,address)": EventFragment;
    "GovernanceTransferred(address)": EventFragment;
    "PathSet(address,bytes)": EventFragment;
    "TokenDeposited(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EthDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundsSpent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernanceTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PathSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenDeposited"): EventFragment;
}

export class ITreasury extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITreasuryInterface;

  functions: {
    acceptGovernance(overrides?: Overrides): Promise<ContractTransaction>;

    "acceptGovernance()"(overrides?: Overrides): Promise<ContractTransaction>;

    depositEth(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "depositEth()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    depositToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "depositToken(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    governance(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "governance()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    newGovernance(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "newGovernance()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setGovernance(
      _governance: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setGovernance(address)"(
      _governance: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPath(
      _token: string,
      _path: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPath(address,bytes)"(
      _token: string,
      _path: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    spend(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "spend(address,uint256,address)"(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swap(
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swap(bytes,uint256,uint256)"(
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  acceptGovernance(overrides?: Overrides): Promise<ContractTransaction>;

  "acceptGovernance()"(overrides?: Overrides): Promise<ContractTransaction>;

  depositEth(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "depositEth()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  depositToken(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "depositToken(address,uint256)"(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  governance(overrides?: CallOverrides): Promise<string>;

  "governance()"(overrides?: CallOverrides): Promise<string>;

  newGovernance(overrides?: CallOverrides): Promise<string>;

  "newGovernance()"(overrides?: CallOverrides): Promise<string>;

  setGovernance(
    _governance: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setGovernance(address)"(
    _governance: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPath(
    _token: string,
    _path: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPath(address,bytes)"(
    _token: string,
    _path: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  spend(
    _token: string,
    _amount: BigNumberish,
    _recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "spend(address,uint256,address)"(
    _token: string,
    _amount: BigNumberish,
    _recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swap(
    _path: BytesLike,
    _amountIn: BigNumberish,
    _amountOutMinimum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swap(bytes,uint256,uint256)"(
    _path: BytesLike,
    _amountIn: BigNumberish,
    _amountOutMinimum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptGovernance(overrides?: CallOverrides): Promise<void>;

    "acceptGovernance()"(overrides?: CallOverrides): Promise<void>;

    depositEth(overrides?: CallOverrides): Promise<void>;

    "depositEth()"(overrides?: CallOverrides): Promise<void>;

    depositToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositToken(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    governance(overrides?: CallOverrides): Promise<string>;

    "governance()"(overrides?: CallOverrides): Promise<string>;

    newGovernance(overrides?: CallOverrides): Promise<string>;

    "newGovernance()"(overrides?: CallOverrides): Promise<string>;

    setGovernance(
      _governance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setGovernance(address)"(
      _governance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPath(
      _token: string,
      _path: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPath(address,bytes)"(
      _token: string,
      _path: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    spend(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "spend(address,uint256,address)"(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swap(bytes,uint256,uint256)"(
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    EthDeposited(_amount: null): EventFilter;

    FundsSpent(_token: null, _amount: null, _recipient: null): EventFilter;

    GovernanceTransferred(_newGovernance: null): EventFilter;

    PathSet(_token: null, _path: null): EventFilter;

    TokenDeposited(_token: null, _amount: null): EventFilter;
  };

  estimateGas: {
    acceptGovernance(overrides?: Overrides): Promise<BigNumber>;

    "acceptGovernance()"(overrides?: Overrides): Promise<BigNumber>;

    depositEth(overrides?: PayableOverrides): Promise<BigNumber>;

    "depositEth()"(overrides?: PayableOverrides): Promise<BigNumber>;

    depositToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "depositToken(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    "governance()"(overrides?: CallOverrides): Promise<BigNumber>;

    newGovernance(overrides?: CallOverrides): Promise<BigNumber>;

    "newGovernance()"(overrides?: CallOverrides): Promise<BigNumber>;

    setGovernance(
      _governance: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setGovernance(address)"(
      _governance: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPath(
      _token: string,
      _path: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPath(address,bytes)"(
      _token: string,
      _path: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    spend(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "spend(address,uint256,address)"(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swap(
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swap(bytes,uint256,uint256)"(
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGovernance(overrides?: Overrides): Promise<PopulatedTransaction>;

    "acceptGovernance()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    depositEth(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "depositEth()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    depositToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "depositToken(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "newGovernance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGovernance(
      _governance: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setGovernance(address)"(
      _governance: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPath(
      _token: string,
      _path: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPath(address,bytes)"(
      _token: string,
      _path: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    spend(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "spend(address,uint256,address)"(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swap(
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swap(bytes,uint256,uint256)"(
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
