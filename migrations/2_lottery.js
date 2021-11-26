const Lottery = artifacts.require("Lottery");
const RandomNumberGenerator = artifacts.require("RandomNumberGenerator");

module.exports = async (deployer) => {
  // Network: Kovan
  // Chainlink VRF Coordinator address: 0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9
  // LINK token address:                0xa36085F69e2889c224210F603D836748e7dC0088
  // Key Hash:                          0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4
  // Fee:                               0.1 * 10**18 (0.1 LINK)
  await deployer.deploy(RandomNumberGenerator, 0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9, 0xa36085F69e2889c224210F603D836748e7dC0088, 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4, 0.1 * 10 ** 18);
  const rngInstance = await RandomNumberGenerator.deployed();

  await deployer.deploy(Lottery, 424242, 1, rngInstance.address);
};