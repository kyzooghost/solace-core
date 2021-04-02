import { waffle } from "hardhat";
const { deployContract, solidity } = waffle;
import { MockProvider } from "ethereum-waffle";
const provider: MockProvider = waffle.provider;
import { Wallet } from "ethers";
import chai from "chai";
const { expect } = chai;

import RegistryArtifact from "../artifacts/contracts/Registry.sol/Registry.json";
import SolaceArtifact from "../artifacts/contracts/SOLACE.sol/SOLACE.json";
import MasterArtifact from "../artifacts/contracts/Master.sol/Master.json";
import VaultArtifact from "../artifacts/contracts/Vault.sol/Vault.json";
import TreasuryArtifact from "../artifacts/contracts/Treasury.sol/Treasury.json";
import { Registry, Solace, Master, Vault, Treasury } from "../typechain";

chai.use(solidity);

describe("Registry", function () {
  // users
  let deployer: Wallet;
  let governor: Wallet;
  let user: Wallet;

  // contracts
  let registry: Registry;
  let solaceToken: Solace;
  let master: Master;
  let vault: Vault;
  let treasury: Treasury;
  // mock contracts
  // TODO: switch from mocks and wallets to actual contracts after implementation
  let locker: Wallet;
  let mockContract1: Wallet;
  let mockContract2: Wallet;
  let mockContract3: Wallet;

  const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

  before(async function () {
    [deployer, governor, user, locker, mockContract1, mockContract2, mockContract3] = provider.getWallets();

    // deploy registry contract
    registry = (await deployContract(
      deployer,
      RegistryArtifact
    )) as Registry;

    // deploy solace token
    solaceToken = (await deployContract(
      deployer,
      SolaceArtifact
    )) as Solace;

    // deploy master contract
    master = (await deployContract(
      deployer,
      MasterArtifact,
      [
        solaceToken.address,
        1
      ]
    )) as Master;

    // deploy vault contract
    vault = (await deployContract(
        deployer,
        VaultArtifact
    )) as Vault;

    // deploy treasury contract
    treasury = (await deployContract(
      deployer,
      TreasuryArtifact,
      [
        solaceToken.address,
        ZERO_ADDRESS,
        ZERO_ADDRESS
      ]
    )) as Treasury;
  })

  describe("governance", function () {
    it("starts with the correct governor", async function () {
      expect(await registry.governance()).to.equal(deployer.address);
    })

    it("can transfer governance", async function () {
      await registry.connect(deployer).setGovernance(governor.address);
      expect(await registry.governance()).to.equal(governor.address);
    })

    it("rejects governance transfer by non governor", async function () {
      await expect(registry.connect(deployer).setGovernance(registry.address)).to.be.revertedWith("!governance");
    })
  })

  describe("solace token", function () {
    it("starts as the zero address", async function () {
      expect(await registry.solace()).to.equal(ZERO_ADDRESS);
    })

    it("can be set", async function () {
      let tx = await registry.connect(governor).setSolace(solaceToken.address);
      expect(await registry.solace()).to.equal(solaceToken.address);
      await expect(tx).to.emit(registry, "SolaceSet").withArgs(solaceToken.address);
    })

    it("cannot be set by non governor", async function () {
      await expect(registry.connect(user).setSolace(solaceToken.address)).to.be.revertedWith("!governance");
    })
  })

  describe("master", function () {
    it("starts as the zero address", async function () {
      expect(await registry.master()).to.equal(ZERO_ADDRESS);
    })

    it("can be set", async function () {
      let tx = await registry.connect(governor).setMaster(master.address);
      expect(await registry.master()).to.equal(master.address);
      await expect(tx).to.emit(registry, "MasterSet").withArgs(master.address);
    })

    it("cannot be set by non governor", async function () {
      await expect(registry.connect(user).setMaster(master.address)).to.be.revertedWith("!governance");
    })
  })

  describe("vault", function () {
    it("starts as the zero address", async function () {
      expect(await registry.vault()).to.equal(ZERO_ADDRESS);
    })

    it("can be set", async function () {
      let tx = await registry.connect(governor).setVault(vault.address);
      expect(await registry.vault()).to.equal(vault.address);
      await expect(tx).to.emit(registry, "VaultSet").withArgs(vault.address);
    })

    it("cannot be set by non governor", async function () {
      await expect(registry.connect(user).setVault(vault.address)).to.be.revertedWith("!governance");
    })
  })

  describe("treasury", function () {
    it("starts as the zero address", async function () {
      expect(await registry.treasury()).to.equal(ZERO_ADDRESS);
    })

    it("can be set", async function () {
      let tx = await registry.connect(governor).setTreasury(treasury.address);
      expect(await registry.treasury()).to.equal(treasury.address);
      await expect(tx).to.emit(registry, "TreasurySet").withArgs(treasury.address);
    })

    it("cannot be set by non governor", async function () {
      await expect(registry.connect(user).setTreasury(treasury.address)).to.be.revertedWith("!governance");
    })
  })

  describe("locker", function () {
    it("starts as the zero address", async function () {
      expect(await registry.locker()).to.equal(ZERO_ADDRESS);
    })

    it("can be set", async function () {
      let tx = await registry.connect(governor).setLocker(locker.address);
      expect(await registry.locker()).to.equal(locker.address);
      await expect(tx).to.emit(registry, "LockerSet").withArgs(locker.address);
    })

    it("cannot be set by non governor", async function () {
      await expect(registry.connect(user).setLocker(locker.address)).to.be.revertedWith("!governance");
    })
  })

  describe("products", function () {
    it("starts with no products", async function () {
      expect(await registry.numProducts()).to.equal(0);
    })

    it("can add products", async function () {
      let tx1 = await registry.connect(governor).addProduct(mockContract1.address);
      expect(await registry.numProducts()).to.equal(1);
      await expect(tx1).to.emit(registry, "ProductAdded").withArgs(mockContract1.address);
      let tx2 = await registry.connect(governor).addProduct(mockContract2.address);
      expect(await registry.numProducts()).to.equal(2);
      await expect(tx2).to.emit(registry, "ProductAdded").withArgs(mockContract2.address);
    })

    it("returns products", async function () {
      expect(await registry.numProducts()).to.equal(2);
      expect(await registry.getProduct(0)).to.equal(mockContract1.address);
      expect(await registry.getProduct(1)).to.equal(mockContract2.address);
      expect(await registry.isProduct(mockContract1.address)).to.equal(true);
      expect(await registry.isProduct(mockContract2.address)).to.equal(true);
      expect(await registry.isProduct(mockContract3.address)).to.equal(false);
    })

    it("rejects adds and removes by non governor", async function () {
      await expect(registry.connect(user).addProduct(mockContract3.address)).to.be.revertedWith("!governance");
      await expect(registry.connect(user).removeProduct(mockContract1.address)).to.be.revertedWith("!governance");
    })

    it("can remove products", async function () {
      let tx1 = await registry.connect(governor).removeProduct(mockContract1.address);
      expect(await registry.numProducts()).to.equal(1);
      expect(await registry.isProduct(mockContract1.address)).to.equal(false);
      await expect(tx1).to.emit(registry, "ProductRemoved").withArgs(mockContract1.address);
      expect(await registry.getProduct(0)).to.equal(mockContract2.address);
    })
  })
});
