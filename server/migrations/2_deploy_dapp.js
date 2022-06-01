const SendCoin = artifacts.require("SendCoin");

module.exports = function(deployer) {
  deployer.deploy(SendCoin);
};