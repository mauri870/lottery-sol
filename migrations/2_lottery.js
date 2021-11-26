const Lottery = artifacts.require("Lottery");

module.exports = function (deployer) {
  deployer.deploy(Lottery, 424242, 1);
};