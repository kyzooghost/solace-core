import { Signer } from "@ethersproject/abstract-signer";
import { deployContract } from "ethereum-waffle";
import { ContractJSON } from "ethereum-waffle/dist/esm/ContractJSON";
import { Contract, BigNumber as BN } from "ethers";
import { keccak256, bufferToHex } from "ethereumjs-util";
import { readFileSync, writeFileSync } from "fs";

import hardhat from "hardhat";
const { waffle, ethers } = hardhat;
const { provider } = waffle;

import { import_artifacts, ArtifactImports } from "./../test/utilities/artifact_importer";
let artifacts: ArtifactImports;

let initialized = false;
const SINGLETON_FACTORY_ADDRESS = "0xce0042B868300000d44A59004Da54A005ffdcf9f";
let knownHashes: any = {"0x0": {"address": "0x0", "salt": "0x0"} };

// deploys a new contract using CREATE2
// call like you would waffle.deployContract
export async function create2Contract(wallet: Signer, factoryOrContractJson: ContractJSON, args: any[] | undefined = [], overrideOptions = {}, contractPath: string = "", deployerAddress: string = SINGLETON_FACTORY_ADDRESS) {
  _init();
  var initCode = await _initCodeGetter(wallet, factoryOrContractJson, args, overrideOptions);
  var [address, salt] = _hasher(initCode, deployerAddress);
  //var exists = await _exists(address, factoryOrContractJson);
  //if(!exists) await _deployer(wallet, initCode, salt);
  console.log("deploying to", address);
  let deploy = true;
  if(deploy) var [deployCode, gasUsed] = await _deployer(wallet, initCode, salt, deployerAddress);
  await _verifier(address, args, contractPath);
  if(deploy) {
    return {
      "deployCode": deployCode,
      "address": address,
      "gasUsed": gasUsed
    };
  } else {
    return {
      "deployCode": "0x0",
      "address": address,
      "gasUsed": BN.from(0)
    };
  }
}

// initializes global variables if not done yet
async function _init() {
  if(initialized) return;
  artifacts = await import_artifacts();
  knownHashes = JSON.parse(readFileSync("stash/scripts/knownHashes.json").toString());
  initialized = true;
}

// gets the initCode to deploy the contract
let provider2 = new ethers.providers.AlchemyProvider(4, process.env.RINKEBY_ALCHEMY_KEY);
const failDeployer = new ethers.Wallet(JSON.parse(process.env.RINKEBY_ACCOUNTS || '[]')[0], provider2);
async function _initCodeGetter(wallet: Signer, factoryOrContractJson: ContractJSON, args: any[] | undefined = [], overrideOptions = {}) {
  // TODO: intelligently construct the initCode instead of depending on failed transaction
  let contract;
  try {
    contract = await deployContract(failDeployer, factoryOrContractJson, args, overrideOptions);
  } catch(e) {
    //console.error(e);
    return e.tx.data;
  }
  console.log(contract);
  throw "somehow created the contract";
}

// test salts until one results in an acceptable address
function _hasher(initCode: string, deployerAddress: string): [string, string] {
  // read known hashes from cache
  if(Object.keys(knownHashes).includes(initCode)) {
    var res: any = knownHashes[initCode];
    return [res.address, res.salt];
  }
  // 0xff ++ deployingAddress is fixed:
  var string1 = '0xff'.concat(deployerAddress.substring(2));
  //var string1 = '0xffce0042B868300000d44A59004Da54A005ffdcf9f'
  // hash the initCode
  var string2 = keccak256(Buffer.from(initCode.substring(2), 'hex')).toString('hex');
  //console.log(`hashing\n${string1}\n${string2}`);
  // In each loop, i is the value of the salt we are checking
  for (var i = 0; i < 72057594037927936; i++) {
  //for (var i =    6440000; i < 72057594037927936; i++) {
  //for (var i =  8821000; i < 72057594037927936; i++) {
  //for (var i = 27000000; i < 72057594037927936; i++) {
  //for (var i = 100000000; i < 72057594037927936; i++) {
    //if(i % 1000000 == 0) console.log(i.toLocaleString('en-US'));
    // 1. Convert i to hex, and it pad to 32 bytes:
    var saltToBytes = i.toString(16).padStart(64, '0');
    // 2. Concatenate this between the other 2 strings
    var concatString = string1.concat(saltToBytes).concat(string2);
    // 3. Hash the resulting string
    var hashed = bufferToHex(keccak256(Buffer.from(concatString.substring(2), 'hex')));
    // 4. Remove leading 0x and 12 bytes to get address
    var addr = hashed.substr(26);
    if(i % 1000000 == 0) console.log(`${i} -> ${addr}`);
    // 5. Check if the result starts with 'solace'
    if (addr.substring(0,6) == '501ace') {
      var address = ethers.utils.getAddress('0x'+addr);
      console.log(`${i} -> ${address}`);
      var salt = '0x'+saltToBytes;
      // 6. Write hash to cache and return
      knownHashes[initCode] = {"address": address, "salt": salt};
      writeFileSync("stash/scripts/knownHashes.json", JSON.stringify(knownHashes));
      return [address, salt];
    }
  }
  throw "no solution found";
}

// returns true if a contract already exists at that address
async function _exists(address: string, factoryOrContractJson: ContractJSON) {
  //var contract = await ethers.getContractAt(factoryOrContractJson.abi, address);
  return false;
}

// deploy the contract
async function _deployer(wallet: Signer, initCode: string, salt: string, deployerAddress: string) {
  let deployerContract = await ethers.getContractAt(artifacts.SingletonFactory.abi, deployerAddress);
  let tx = await deployerContract.connect(wallet).deploy(initCode, salt, {gasLimit: 5000000});
  let receipt = await tx.wait();
  return [tx.data, receipt.gasUsed.toString()]
  //return ["", "0"];
}

// verify on etherscan
async function _verifier(address: string, args: any[] | undefined, contractPath: string) {
  if(provider.network.chainId == 31337) return; // dont try to verify local contracts
  // likely just deployed a contract, let etherscan index it
  await _sleeper(10000);
  var verifyArgs: any = {
    address: address,
    constructorArguments: args
  };
  if(contractPath != "") verifyArgs.contract = contractPath;
  try {
    await hardhat.run("verify:verify", verifyArgs);
  } catch(e) { /* probably already verified */ }
}

async function _sleeper(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
