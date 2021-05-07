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

interface TreasuryInterface extends ethers.utils.Interface {
  functions: {
    "depositEth()": FunctionFragment;
    "depositToken(address,uint256)": FunctionFragment;
    "governance()": FunctionFragment;
    "paths(address)": FunctionFragment;
    "setGovernance(address)": FunctionFragment;
    "setPath(address,bytes)": FunctionFragment;
    "solace()": FunctionFragment;
    "spend(address,uint256,address)": FunctionFragment;
    "swap(address,bytes,uint256,uint256)": FunctionFragment;
    "swapRouter()": FunctionFragment;
    "weth()": FunctionFragment;
  };

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
  encodeFunctionData(functionFragment: "paths", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setGovernance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPath",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "solace", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "spend",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;

  decodeFunctionResult(functionFragment: "depositEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paths", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPath", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "solace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;

  events: {
    "DepositEth(uint256)": EventFragment;
    "DepositToken(address,uint256)": EventFragment;
    "PathSet(address,bytes)": EventFragment;
    "Spend(address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DepositEth"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PathSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Spend"): EventFragment;
}

export class Treasury extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TreasuryInterface;

  functions: {
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

    paths(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "paths(address)"(
      arg0: string,
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

    solace(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "solace()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

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
      _token: string,
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swap(address,bytes,uint256,uint256)"(
      _token: string,
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapRouter(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "swapRouter()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    weth(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "weth()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

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

  paths(arg0: string, overrides?: CallOverrides): Promise<string>;

  "paths(address)"(arg0: string, overrides?: CallOverrides): Promise<string>;

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

  solace(overrides?: CallOverrides): Promise<string>;

  "solace()"(overrides?: CallOverrides): Promise<string>;

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
    _token: string,
    _path: BytesLike,
    _amountIn: BigNumberish,
    _amountOutMinimum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swap(address,bytes,uint256,uint256)"(
    _token: string,
    _path: BytesLike,
    _amountIn: BigNumberish,
    _amountOutMinimum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapRouter(overrides?: CallOverrides): Promise<string>;

  "swapRouter()"(overrides?: CallOverrides): Promise<string>;

  weth(overrides?: CallOverrides): Promise<string>;

  "weth()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
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

    paths(arg0: string, overrides?: CallOverrides): Promise<string>;

    "paths(address)"(arg0: string, overrides?: CallOverrides): Promise<string>;

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

    solace(overrides?: CallOverrides): Promise<string>;

    "solace()"(overrides?: CallOverrides): Promise<string>;

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
      _token: string,
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swap(address,bytes,uint256,uint256)"(
      _token: string,
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapRouter(overrides?: CallOverrides): Promise<string>;

    "swapRouter()"(overrides?: CallOverrides): Promise<string>;

    weth(overrides?: CallOverrides): Promise<string>;

    "weth()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    DepositEth(_amount: null): EventFilter;

    DepositToken(_token: null, _amount: null): EventFilter;

    PathSet(_token: null, _path: null): EventFilter;

    Spend(_token: null, _amount: null, _recipient: null): EventFilter;
  };

  estimateGas: {
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

    paths(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "paths(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    solace(overrides?: CallOverrides): Promise<BigNumber>;

    "solace()"(overrides?: CallOverrides): Promise<BigNumber>;

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
      _token: string,
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swap(address,bytes,uint256,uint256)"(
      _token: string,
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    "swapRouter()"(overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    "weth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
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

    paths(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "paths(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    solace(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "solace()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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
      _token: string,
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swap(address,bytes,uint256,uint256)"(
      _token: string,
      _path: BytesLike,
      _amountIn: BigNumberish,
      _amountOutMinimum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "swapRouter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "weth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
