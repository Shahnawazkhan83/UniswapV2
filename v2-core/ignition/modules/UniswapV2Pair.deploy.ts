// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const UniswapV2PairModule = buildModule("UniswapV2PairModule", (m) => {

  // Deploying the UniswapV2Pair contract
  const uniswapV2Pair = m.contract("UniswapV2Pair", []);

  return { uniswapV2Pair };
});

export default UniswapV2PairModule;
