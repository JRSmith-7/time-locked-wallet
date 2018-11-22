DApp = {
    web3Provider: null,
    factoryContract: null,
    walletContract: null,
    toptalTokenContract: null,
    currentAccount: null,
    table: null,
    wallets: {},

    // set to true to use with local blockchain
    development: true,
    //Rinkeby:
    factoryAddress: "0xe47684d658872fbde11c82036099a12c066c4fa3",
    tokenAddress: "0x86b32525e687500ed4a665d1b16fef526cdd6f10",

    init: function() {
        console.log("[x] Initializing DApp.");
        this.initWeb3();
        this.initContract();
    },

    /**************************************************************************
     * Smart Contracts interaction methods.
     *************************************************************************/

    initWeb3: function() {
        // Is there is an injected web3 instance?
        if (typeof web3 !== 'undefined') {
          DApp.web3Provider = web3.currentProvider;
        } else {
          // If no injected web3 instance is detected, fallback to the TestRPC
          DApp.web3Provider = new Web3.providers.HttpProvider('http://localhost:9545');
        }
        web3 = new Web3(DApp.web3Provider);
        console.log("[x] web3 object initialized.");
    },

    getFactoryContract: function(){
        if(DApp.development)
            return DApp.factoryContract.deployed();
        else
            return DApp.factoryContract.at(DApp.factoryAddress);
    },

    getToptalTokenContract: function(){
        if(DApp.development)
            return DApp.toptalTokenContract.deployed();
        else
            return DApp.toptalTokenContract.at(DApp.tokenAddress);
    },
