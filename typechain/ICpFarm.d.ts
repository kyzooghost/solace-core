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

interface ICpFarmInterface extends ethers.utils.Interface {
  functions: {
    "accRewardPerShare()": FunctionFragment;
    "blockReward()": FunctionFragment;
    "depositCp(uint256)": FunctionFragment;
    "depositEth()": FunctionFragment;
    "endBlock()": FunctionFragment;
    "farmType()": FunctionFragment;
    "getMultiplier(uint256,uint256)": FunctionFragment;
    "governance()": FunctionFragment;
    "lastRewardBlock()": FunctionFragment;
    "master()": FunctionFragment;
    "pendingRewards(address)": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "setEnd(uint256)": FunctionFragment;
    "setGovernance(address)": FunctionFragment;
    "setRewards(uint256)": FunctionFragment;
    "stakeToken()": FunctionFragment;
    "startBlock()": FunctionFragment;
    "updateFarm()": FunctionFragment;
    "valueStaked()": FunctionFragment;
    "withdrawCp(uint256)": FunctionFragment;
    "withdrawEth(uint256,uint256)": FunctionFragment;
    "withdrawRewards()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accRewardPerShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blockReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositCp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositEth",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "endBlock", values?: undefined): string;
  encodeFunctionData(functionFragment: "farmType", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getMultiplier",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastRewardBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "master", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setEnd",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGovernance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateFarm",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "valueStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawCp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEth",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRewards",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "accRewardPerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blockReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositCp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositEth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endBlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "farmType", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastRewardBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "master", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setEnd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateFarm", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "valueStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdrawCp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRewards",
    data: BytesLike
  ): Result;

  events: {
    "DepositCp(address,uint256)": EventFragment;
    "DepositEth(address,uint256)": EventFragment;
    "WithdrawCp(address,uint256)": EventFragment;
    "WithdrawEth(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DepositCp"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositEth"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawCp"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawEth"): EventFragment;
}

export class ICpFarm extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ICpFarmInterface;

  functions: {
    accRewardPerShare(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "accRewardPerShare()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    blockReward(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "blockReward()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    depositCp(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "depositCp(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    depositEth(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "depositEth()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    endBlock(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "endBlock()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    farmType(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "farmType()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getMultiplier(uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

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

    lastRewardBlock(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "lastRewardBlock()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    master(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "master()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    pendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "pendingRewards(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    rewardToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "rewardToken()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setEnd(
      _endBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setEnd(uint256)"(
      _endBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setGovernance(
      _governance: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setGovernance(address)"(
      _governance: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRewards(
      _blockReward: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRewards(uint256)"(
      _blockReward: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stakeToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "stakeToken()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    startBlock(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "startBlock()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    updateFarm(overrides?: Overrides): Promise<ContractTransaction>;

    "updateFarm()"(overrides?: Overrides): Promise<ContractTransaction>;

    valueStaked(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "valueStaked()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    withdrawCp(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawCp(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawEth(
      _amount: BigNumberish,
      _maxLoss: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawEth(uint256,uint256)"(
      _amount: BigNumberish,
      _maxLoss: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawRewards(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawRewards()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

  "accRewardPerShare()"(overrides?: CallOverrides): Promise<BigNumber>;

  blockReward(overrides?: CallOverrides): Promise<BigNumber>;

  "blockReward()"(overrides?: CallOverrides): Promise<BigNumber>;

  depositCp(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "depositCp(uint256)"(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  depositEth(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "depositEth()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  endBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "endBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  farmType(overrides?: CallOverrides): Promise<BigNumber>;

  "farmType()"(overrides?: CallOverrides): Promise<BigNumber>;

  getMultiplier(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getMultiplier(uint256,uint256)"(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  governance(overrides?: CallOverrides): Promise<string>;

  "governance()"(overrides?: CallOverrides): Promise<string>;

  lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "lastRewardBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  master(overrides?: CallOverrides): Promise<string>;

  "master()"(overrides?: CallOverrides): Promise<string>;

  pendingRewards(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "pendingRewards(address)"(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  "rewardToken()"(overrides?: CallOverrides): Promise<string>;

  setEnd(
    _endBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setEnd(uint256)"(
    _endBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setGovernance(
    _governance: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setGovernance(address)"(
    _governance: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRewards(
    _blockReward: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRewards(uint256)"(
    _blockReward: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stakeToken(overrides?: CallOverrides): Promise<string>;

  "stakeToken()"(overrides?: CallOverrides): Promise<string>;

  startBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "startBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  updateFarm(overrides?: Overrides): Promise<ContractTransaction>;

  "updateFarm()"(overrides?: Overrides): Promise<ContractTransaction>;

  valueStaked(overrides?: CallOverrides): Promise<BigNumber>;

  "valueStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawCp(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawCp(uint256)"(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawEth(
    _amount: BigNumberish,
    _maxLoss: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawEth(uint256,uint256)"(
    _amount: BigNumberish,
    _maxLoss: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawRewards(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawRewards()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    "accRewardPerShare()"(overrides?: CallOverrides): Promise<BigNumber>;

    blockReward(overrides?: CallOverrides): Promise<BigNumber>;

    "blockReward()"(overrides?: CallOverrides): Promise<BigNumber>;

    depositCp(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "depositCp(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositEth(overrides?: CallOverrides): Promise<void>;

    "depositEth()"(overrides?: CallOverrides): Promise<void>;

    endBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "endBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    farmType(overrides?: CallOverrides): Promise<BigNumber>;

    "farmType()"(overrides?: CallOverrides): Promise<BigNumber>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMultiplier(uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<string>;

    "governance()"(overrides?: CallOverrides): Promise<string>;

    lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "lastRewardBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    master(overrides?: CallOverrides): Promise<string>;

    "master()"(overrides?: CallOverrides): Promise<string>;

    pendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingRewards(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    "rewardToken()"(overrides?: CallOverrides): Promise<string>;

    setEnd(_endBlock: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setEnd(uint256)"(
      _endBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setGovernance(
      _governance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setGovernance(address)"(
      _governance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewards(
      _blockReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRewards(uint256)"(
      _blockReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeToken(overrides?: CallOverrides): Promise<string>;

    "stakeToken()"(overrides?: CallOverrides): Promise<string>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "startBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateFarm(overrides?: CallOverrides): Promise<void>;

    "updateFarm()"(overrides?: CallOverrides): Promise<void>;

    valueStaked(overrides?: CallOverrides): Promise<BigNumber>;

    "valueStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawCp(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "withdrawCp(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawEth(
      _amount: BigNumberish,
      _maxLoss: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawEth(uint256,uint256)"(
      _amount: BigNumberish,
      _maxLoss: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawRewards(overrides?: CallOverrides): Promise<void>;

    "withdrawRewards()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    DepositCp(_user: string | null, _amount: null): EventFilter;

    DepositEth(_user: string | null, _amount: null): EventFilter;

    WithdrawCp(_user: string | null, _amount: null): EventFilter;

    WithdrawEth(_user: string | null, _amount: null): EventFilter;
  };

  estimateGas: {
    accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    "accRewardPerShare()"(overrides?: CallOverrides): Promise<BigNumber>;

    blockReward(overrides?: CallOverrides): Promise<BigNumber>;

    "blockReward()"(overrides?: CallOverrides): Promise<BigNumber>;

    depositCp(_amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "depositCp(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    depositEth(overrides?: PayableOverrides): Promise<BigNumber>;

    "depositEth()"(overrides?: PayableOverrides): Promise<BigNumber>;

    endBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "endBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    farmType(overrides?: CallOverrides): Promise<BigNumber>;

    "farmType()"(overrides?: CallOverrides): Promise<BigNumber>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMultiplier(uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    "governance()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "lastRewardBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    master(overrides?: CallOverrides): Promise<BigNumber>;

    "master()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingRewards(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    setEnd(_endBlock: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setEnd(uint256)"(
      _endBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setGovernance(
      _governance: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setGovernance(address)"(
      _governance: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRewards(
      _blockReward: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRewards(uint256)"(
      _blockReward: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stakeToken(overrides?: CallOverrides): Promise<BigNumber>;

    "stakeToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "startBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateFarm(overrides?: Overrides): Promise<BigNumber>;

    "updateFarm()"(overrides?: Overrides): Promise<BigNumber>;

    valueStaked(overrides?: CallOverrides): Promise<BigNumber>;

    "valueStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawCp(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawCp(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawEth(
      _amount: BigNumberish,
      _maxLoss: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawEth(uint256,uint256)"(
      _amount: BigNumberish,
      _maxLoss: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawRewards(overrides?: Overrides): Promise<BigNumber>;

    "withdrawRewards()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accRewardPerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "accRewardPerShare()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blockReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "blockReward()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositCp(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "depositCp(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    depositEth(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "depositEth()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    endBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "endBlock()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    farmType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "farmType()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMultiplier(uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastRewardBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastRewardBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    master(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "master()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingRewards(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setEnd(
      _endBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setEnd(uint256)"(
      _endBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setGovernance(
      _governance: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setGovernance(address)"(
      _governance: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRewards(
      _blockReward: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRewards(uint256)"(
      _blockReward: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stakeToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startBlock()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateFarm(overrides?: Overrides): Promise<PopulatedTransaction>;

    "updateFarm()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    valueStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "valueStaked()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawCp(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawCp(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawEth(
      _amount: BigNumberish,
      _maxLoss: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawEth(uint256,uint256)"(
      _amount: BigNumberish,
      _maxLoss: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawRewards(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawRewards()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
