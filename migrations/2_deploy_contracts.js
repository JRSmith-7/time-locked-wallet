var TimeLockedWalletFactory = artifacts.require("TimeLockedWalletFactory");
var MyAdvancedToken = artifacts.require("MyAdvacedToken");

module.exports = function(deployer) {
  deployer.deploy(TimeLockedWalletFactory);
  deployer.deploy(MyAdvancedToken);
};
