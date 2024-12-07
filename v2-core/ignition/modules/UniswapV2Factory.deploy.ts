// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
require("dotenv").config();

const _feeToSetter =
  process.env.FEE_TO_SETTER;
const UniswapV2FactoryModule = buildModule("UniswapV2FactoryModule", (m) => {
  // Parameter for the feeToSetter address
  const feeToSetter = m.getParameter("feeToSetter", _feeToSetter); // Replace with a valid address
  
  // Deploy the UniswapV2Factory contract
  const uniswapV2Factory = m.contract("UniswapV2Factory", [feeToSetter]);

  return { uniswapV2Factory };
});

export default UniswapV2FactoryModule;
