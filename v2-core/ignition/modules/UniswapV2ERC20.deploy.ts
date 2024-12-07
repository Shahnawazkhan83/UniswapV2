// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const UniswapV2ERC20Module = buildModule("UniswapV2ERC20Module", (m) => {

  // Deploy the UniswapV2ERC20 contract
  const uniswapV2ERC20 = m.contract("UniswapV2ERC20", [], {
  });

  return { uniswapV2ERC20};
});

export default UniswapV2ERC20Module;
