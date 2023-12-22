require('@nomiclabs/hardhat-ethers');

module.exports = {
  // ... other configurations

  paths: {
    artifacts: './artifacts',
  },

  networks: {
    hardhat: {
    },

    mode:{
      accounts: ["db1cb1e2bcfafe58a83bb46500a1a7a3efb2ec87efd343481d921e8464fdb8f3"],
      chainid: 919,
      url: "https://sepolia.mode.network/",
    }
  },

  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
