const { factoryAbi, poolAbi } = require("./abis/uniswapabi.js");
const erc20Abi = require("./abis/erc20abi.json");
const erc404Abi = require("./abis/erc404abi.json");
const {
  approveTransfer,
  contractInt,
  getSigner,
  encodePriceSqrt,
  initializePool,
  createPool,
} = require("./interfaces");
const {
  erc404Address,
  usdtAddress,
  positionAddress,
  factoryAddress,
  poolFee,
  erc404price,
} = require("./config");

async function deployPool() {
  let signer = await getSigner();
  await approveTransfer(
    usdtAddress,
    erc404Address,
    positionAddress,
    erc20Abi,
    erc404Abi
  );
  console.log(1);
  let factory = await contractInt(factoryAddress, factoryAbi);
  console.log(2);
  let poolAddress = await factory.getPool(usdtAddress, erc404Address, poolFee);
  console.log(poolAddress);
  let price = encodePriceSqrt(1, erc404price);
  if (poolAddress === "0x0000000000000000000000000000000000000000") {
    console.log("Creating Pool...");
    poolAddress = await createPool(
      factory,
      usdtAddress,
      erc404Address,
      poolFee
    );
    await initializePool(poolAddress, price, signer, poolAbi);
  }
}

deployPool();
