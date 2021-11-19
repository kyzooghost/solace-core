/**
 * Tools such as MythX require contracts to be preprocessed.
 * The main advantage of Artifact Importer is it's ability to seamlessly switch between raw and processed contracts.
 * It also removes repetitive code from the tests.
 */

import { config as dotenv_config } from "dotenv";
dotenv_config();
import { ContractJSON } from "ethereum-waffle/dist/esm/ContractJSON";

export interface ArtifactImports { [contract_name: string]: ContractJSON };

export const EMPTY_ARTIFACTS: ArtifactImports = {};

export async function import_artifacts() {
  let artifacts: ArtifactImports = {};

  // solace imports pre-dao
  let artifact_dir = process.env.USE_PROCESSED_FILES === "true" ? "../../artifacts/contracts_processed" : "../../artifacts/contracts";
  artifacts.Registry = await tryImport(`${artifact_dir}/Registry.sol/Registry.json`);
  artifacts.WETH = await tryImport(`${artifact_dir}/WETH9.sol/WETH9.json`);
  artifacts.Vault = await tryImport(`${artifact_dir}/Vault.sol/Vault.json`);
  artifacts.ClaimsEscrow = await tryImport(`${artifact_dir}/ClaimsEscrow.sol/ClaimsEscrow.json`);
  artifacts.Treasury = await tryImport (`${artifact_dir}/Treasury.sol/Treasury.json`);
  artifacts.PolicyManager = await tryImport(`${artifact_dir}/PolicyManager.sol/PolicyManager.json`);
  artifacts.PolicyDescriptor = await tryImport(`${artifact_dir}/PolicyDescriptor.sol/PolicyDescriptor.json`);
  artifacts.PolicyDescriptorV2 = await tryImport(`${artifact_dir}/PolicyDescriptorV2.sol/PolicyDescriptorV2.json`);
  artifacts.RiskManager = await tryImport(`${artifact_dir}/RiskManager.sol/RiskManager.json`);
  artifacts.MockGovernableInitializable = await tryImport(`${artifact_dir}/mocks/MockGovernableInitializable.sol/MockGovernableInitializable.json`);
  // solace imports post-dao
  artifacts.SOLACE = await tryImport(`${artifact_dir}/SOLACE.sol/SOLACE.json`);
  artifacts.OptionsFarming = await tryImport(`${artifact_dir}/OptionsFarming.sol/OptionsFarming.json`);
  artifacts.FarmController = await tryImport(`${artifact_dir}/FarmController.sol/FarmController.json`);
  artifacts.CpFarm = await tryImport(`${artifact_dir}/CpFarm.sol/CpFarm.json`);
  artifacts.LpAppraisor = await tryImport(`${artifact_dir}/LpAppraisor.sol/LpAppraisor.json`);
  artifacts.SolaceEthLpFarm = await tryImport(`${artifact_dir}/SolaceEthLpFarm.sol/SolaceEthLpFarm.json`);
  artifacts.SptFarm = await tryImport(`${artifact_dir}/SptFarm.sol/SptFarm.json`);

  // product v2
  artifacts.ProductFactory = await tryImport(`${artifact_dir}/ProductFactory.sol/ProductFactory.json`);
  artifacts.CoverageProduct = await tryImport(`${artifact_dir}/products/CoverageProduct.sol/CoverageProduct.json`);
  artifacts.MockProductV2 = await tryImport(`${artifact_dir}/mocks/MockProductV2.sol/MockProductV2.json`);

  // oracles
  artifacts.ExchangeQuoter1InchV1 = await tryImport(`${artifact_dir}/oracles/ExchangeQuoter1InchV1.sol/ExchangeQuoter1InchV1.json`);
  artifacts.ExchangeQuoterManual = await tryImport(`${artifact_dir}/oracles/ExchangeQuoterManual.sol/ExchangeQuoterManual.json`);
  artifacts.ExchangeQuoterAaveV2 = await tryImport(`${artifact_dir}/oracles/ExchangeQuoterAaveV2.sol/ExchangeQuoterAaveV2.json`);

  // generic imports
  artifacts.ERC20 = await tryImport(`${artifact_dir}/SOLACE.sol/ERC20.json`);
  if(!artifacts.ERC20) artifacts.ERC20 = await tryImport(`../../artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json`);
  artifacts.MockERC20 = await tryImport(`${artifact_dir}/mocks/MockERC20.sol/MockERC20.json`);
  artifacts.MockERC20v2 = await tryImport(`${artifact_dir}/mocks/MockERC20v2.sol/MockERC20v2.json`);
  artifacts.MockERC721 = await tryImport(`${artifact_dir}/mocks/MockERC721.sol/MockERC721.json`);
  artifacts.MockERC1271 = await tryImport(`${artifact_dir}/mocks/MockERC1271.sol/MockERC1271.json`);
  artifacts.MockFaultyReceiver = await tryImport(`${artifact_dir}/mocks/MockFaultyReceiver.sol/MockFaultyReceiver.json`);
  artifacts.GasGriefer = await tryImport(`${artifact_dir}/mocks/GasGriefer.sol/GasGriefer.json`);
  artifacts.Blacklist = await tryImport(`${artifact_dir}/interface/IBlacklist.sol/IBlacklist.json`);
  artifacts.SingletonFactory = await tryImport(`${artifact_dir}/interface/ISingletonFactory.sol/ISingletonFactory.json`);
  artifacts.Deployer = await tryImport(`${artifact_dir}/Deployer.sol/Deployer.json`);

  // risk strategy imports
  artifacts.RiskStrategyFactory = await tryImport(`${artifact_dir}/RiskStrategyFactory.sol/RiskStrategyFactory.json`);
  artifacts.RiskStrategy = await tryImport(`${artifact_dir}/RiskStrategy.sol/RiskStrategy.json`);
  artifacts.MockRiskStrategy = await tryImport(`${artifact_dir}/mocks/MockRiskStrategy.sol/MockRiskStrategy.json`);

  // uniswapv3 imports
  artifacts.UniswapV3Factory = await tryImport("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json");
  artifacts.UniswapV3Pool = await tryImport("@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json");
  artifacts.SwapRouter = await tryImport("@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json");
  artifacts.NonfungiblePositionManager = await tryImport("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json");

  // coverage data provider
  artifacts.CoverageDataProvider = await tryImport(`${artifact_dir}/CoverageDataProvider.sol/CoverageDataProvider.json`);

  return artifacts;
}

async function tryImport(filepath: string) {
  try {
    var imp = await import(filepath);
    return imp;
  } catch(e) {
    return undefined;
  }
}
