const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");


module.exports = async function (deployer) {
    let weth
    deployer.deploy(Migrations);
};
