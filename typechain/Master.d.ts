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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MasterInterface extends ethers.utils.Interface {
  functions: {
    "acceptGovernance()": FunctionFragment;
    "allocPoints(uint256)": FunctionFragment;
    "farmAddresses(uint256)": FunctionFragment;
    "farmIndices(address)": FunctionFragment;
    "governance()": FunctionFragment;
    "massUpdateFarms()": FunctionFragment;
    "newGovernance()": FunctionFragment;
    "numFarms()": FunctionFragment;
    "registerFarm(address,uint256)": FunctionFragment;
    "setAllocPoints(uint256,uint256)": FunctionFragment;
    "setGovernance(address)": FunctionFragment;
    "setSolacePerBlock(uint256)": FunctionFragment;
    "solace()": FunctionFragment;
    "solacePerBlock()": FunctionFragment;
    "totalAllocPoints()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allocPoints",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "farmAddresses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "farmIndices", values: [string]): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "massUpdateFarms",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "numFarms", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerFarm",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllocPoints",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGovernance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSolacePerBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "solace", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "solacePerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalAllocPoints",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allocPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "farmAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "farmIndices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "massUpdateFarms",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numFarms", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerFarm",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllocPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSolacePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "solace", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "solacePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocPoints",
    data: BytesLike
  ): Result;

  events: {
    "FarmCreated(uint256,address)": EventFragment;
    "GovernanceTransferred(address)": EventFragment;
    "RewardsSet(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FarmCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernanceTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsSet"): EventFragment;
}

export class Master extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MasterInterface;

  functions: {
    acceptGovernance(overrides?: Overrides): Promise<ContractTransaction>;

    "acceptGovernance()"(overrides?: Overrides): Promise<ContractTransaction>;

    allocPoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "allocPoints(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    farmAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "farmAddresses(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    farmIndices(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "farmIndices(address)"(
      arg0: string,
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

    massUpdateFarms(overrides?: Overrides): Promise<ContractTransaction>;

    "massUpdateFarms()"(overrides?: Overrides): Promise<ContractTransaction>;

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

    numFarms(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "numFarms()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    registerFarm(
      _farmAddress: string,
      _allocPoints: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerFarm(address,uint256)"(
      _farmAddress: string,
      _allocPoints: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setAllocPoints(
      _farmId: BigNumberish,
      _allocPoints: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAllocPoints(uint256,uint256)"(
      _farmId: BigNumberish,
      _allocPoints: BigNumberish,
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

    setSolacePerBlock(
      _solacePerBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setSolacePerBlock(uint256)"(
      _solacePerBlock: BigNumberish,
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

    solacePerBlock(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "solacePerBlock()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    totalAllocPoints(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalAllocPoints()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  acceptGovernance(overrides?: Overrides): Promise<ContractTransaction>;

  "acceptGovernance()"(overrides?: Overrides): Promise<ContractTransaction>;

  allocPoints(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allocPoints(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  farmAddresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "farmAddresses(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  farmIndices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "farmIndices(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  governance(overrides?: CallOverrides): Promise<string>;

  "governance()"(overrides?: CallOverrides): Promise<string>;

  massUpdateFarms(overrides?: Overrides): Promise<ContractTransaction>;

  "massUpdateFarms()"(overrides?: Overrides): Promise<ContractTransaction>;

  newGovernance(overrides?: CallOverrides): Promise<string>;

  "newGovernance()"(overrides?: CallOverrides): Promise<string>;

  numFarms(overrides?: CallOverrides): Promise<BigNumber>;

  "numFarms()"(overrides?: CallOverrides): Promise<BigNumber>;

  registerFarm(
    _farmAddress: string,
    _allocPoints: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerFarm(address,uint256)"(
    _farmAddress: string,
    _allocPoints: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setAllocPoints(
    _farmId: BigNumberish,
    _allocPoints: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAllocPoints(uint256,uint256)"(
    _farmId: BigNumberish,
    _allocPoints: BigNumberish,
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

  setSolacePerBlock(
    _solacePerBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setSolacePerBlock(uint256)"(
    _solacePerBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  solace(overrides?: CallOverrides): Promise<string>;

  "solace()"(overrides?: CallOverrides): Promise<string>;

  solacePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "solacePerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalAllocPoints(overrides?: CallOverrides): Promise<BigNumber>;

  "totalAllocPoints()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    acceptGovernance(overrides?: CallOverrides): Promise<void>;

    "acceptGovernance()"(overrides?: CallOverrides): Promise<void>;

    allocPoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allocPoints(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    farmAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "farmAddresses(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    farmIndices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "farmIndices(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<string>;

    "governance()"(overrides?: CallOverrides): Promise<string>;

    massUpdateFarms(overrides?: CallOverrides): Promise<void>;

    "massUpdateFarms()"(overrides?: CallOverrides): Promise<void>;

    newGovernance(overrides?: CallOverrides): Promise<string>;

    "newGovernance()"(overrides?: CallOverrides): Promise<string>;

    numFarms(overrides?: CallOverrides): Promise<BigNumber>;

    "numFarms()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerFarm(
      _farmAddress: string,
      _allocPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "registerFarm(address,uint256)"(
      _farmAddress: string,
      _allocPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAllocPoints(
      _farmId: BigNumberish,
      _allocPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAllocPoints(uint256,uint256)"(
      _farmId: BigNumberish,
      _allocPoints: BigNumberish,
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

    setSolacePerBlock(
      _solacePerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSolacePerBlock(uint256)"(
      _solacePerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    solace(overrides?: CallOverrides): Promise<string>;

    "solace()"(overrides?: CallOverrides): Promise<string>;

    solacePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "solacePerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPoints(overrides?: CallOverrides): Promise<BigNumber>;

    "totalAllocPoints()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    FarmCreated(
      _farmId: BigNumberish | null,
      _farmAddress: string | null
    ): EventFilter;

    GovernanceTransferred(_newGovernance: null): EventFilter;

    RewardsSet(_solacePerBlock: null): EventFilter;
  };

  estimateGas: {
    acceptGovernance(overrides?: Overrides): Promise<BigNumber>;

    "acceptGovernance()"(overrides?: Overrides): Promise<BigNumber>;

    allocPoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allocPoints(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    farmAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "farmAddresses(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    farmIndices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "farmIndices(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    "governance()"(overrides?: CallOverrides): Promise<BigNumber>;

    massUpdateFarms(overrides?: Overrides): Promise<BigNumber>;

    "massUpdateFarms()"(overrides?: Overrides): Promise<BigNumber>;

    newGovernance(overrides?: CallOverrides): Promise<BigNumber>;

    "newGovernance()"(overrides?: CallOverrides): Promise<BigNumber>;

    numFarms(overrides?: CallOverrides): Promise<BigNumber>;

    "numFarms()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerFarm(
      _farmAddress: string,
      _allocPoints: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "registerFarm(address,uint256)"(
      _farmAddress: string,
      _allocPoints: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setAllocPoints(
      _farmId: BigNumberish,
      _allocPoints: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAllocPoints(uint256,uint256)"(
      _farmId: BigNumberish,
      _allocPoints: BigNumberish,
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

    setSolacePerBlock(
      _solacePerBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setSolacePerBlock(uint256)"(
      _solacePerBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    solace(overrides?: CallOverrides): Promise<BigNumber>;

    "solace()"(overrides?: CallOverrides): Promise<BigNumber>;

    solacePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "solacePerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPoints(overrides?: CallOverrides): Promise<BigNumber>;

    "totalAllocPoints()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGovernance(overrides?: Overrides): Promise<PopulatedTransaction>;

    "acceptGovernance()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    allocPoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allocPoints(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    farmAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "farmAddresses(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    farmIndices(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "farmIndices(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    massUpdateFarms(overrides?: Overrides): Promise<PopulatedTransaction>;

    "massUpdateFarms()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    newGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "newGovernance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numFarms(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "numFarms()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerFarm(
      _farmAddress: string,
      _allocPoints: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerFarm(address,uint256)"(
      _farmAddress: string,
      _allocPoints: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setAllocPoints(
      _farmId: BigNumberish,
      _allocPoints: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAllocPoints(uint256,uint256)"(
      _farmId: BigNumberish,
      _allocPoints: BigNumberish,
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

    setSolacePerBlock(
      _solacePerBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setSolacePerBlock(uint256)"(
      _solacePerBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    solace(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "solace()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    solacePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "solacePerBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalAllocPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalAllocPoints()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
