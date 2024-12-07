// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
require("dotenv").config();
// Constants for deployment parameters
const _factoryAddress = process.env.FACTORY_ADDRESS;  // Replace with actual Uniswap factory address
const _wethAddress = process.env.WETH_ADDRESS;  // Replace with actual WETH address

const UniswapV2Router02Module = buildModule("UniswapV2Router02Module", (m) => {
  // Parameters for constructor of UniswapV2Router01 contract
  const factoryAddress = m.getParameter("factoryAddress", _factoryAddress);
  const wethAddress = m.getParameter("wethAddress", _wethAddress);

  // Deploy the UniswapV2Router01 contract
  const router = m.contract("UniswapV2Router02", [factoryAddress, wethAddress]);

  // Return deployed contract instance
  return { router };
});

export default UniswapV2Router02Module;
