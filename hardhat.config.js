require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
};

// require("@nomicfoundation/hardhat-toolbox");

// module.exports = {
//   solidity: "0.8.0",
//   networks: {
//     sepolia: {
//       url: "https://eth-sepolia.alchemyapi.io/v2/QuAZV-0ETW0pNNZgGV8w5bAL1W5jFLLA",
//       accounts: ["b16c9e2478f6b2f85218362b5e38a62c9f612a18bb6b570266ee6fcc7e653851"]
//     }
//   }
// };

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/QuAZV-0ETW0pNNZgGV8w5bAL1W5jFLLA`,
      accounts: [
        "b16c9e2478f6b2f85218362b5e38a62c9f612a18bb6b570266ee6fcc7e653851",
      ],
    },
  },
};
