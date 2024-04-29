require("dotenv").config();

const key = `${process.env.PRIV_KEY}`;
const rpc = `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;
const chainID = 11155111; // Ethereum Sepolia Testnet

const usdtAddress = "0xe6D73d56DE480F8E86F8Fa62FE12f343a88901Ce"; // Liquidity Pool Token Contract
const erc404Address = "0xFc3880aCC8d5345B9b50F4bc0b4aF8a01B107C81"; // ERC-404 Token Contract

const positionAddress = "0x1238536071E1c677A632429e3655c799b22cDA52"; // NonfungiblePositionManager Sepolia Address
const factoryAddress = "0x0227628f3F023bb0B980b67D528571c95c6DaC1c"; // UniswapV3Factory Sepolia Address
const poolAddress = "0xAc9a003d28942E1c56B165Ba29d43BA6f700bc0C"; // Obtain the address after executing step1-deploy-pool.js then update here!
const poolFee = 10000; // Set the Uniswap pool fee, 10000 = 1%

let erc404price = 300; // Price per ERC-404 Token in USDT
let usdtLiquidity = 14000; // Amount of Fake USDT Tokens to deposit in pool + extra overhead for price curve.
let erc404Liquidity = 35; // Amount of ERC-404 - NFTs in pool.


module.exports = {
  key,
  rpc,
  erc404Address,
  usdtAddress,
  positionAddress,
  poolAddress,
  poolFee,
  erc404price,
  usdtLiquidity,
  erc404Liquidity,
  factoryAddress,
  chainID,
};
