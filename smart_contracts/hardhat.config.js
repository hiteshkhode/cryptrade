// https://eth-ropsten.alchemyapi.io/v2/dKAwFEnq2COdl5GNDrDVpmERmLZGUvBJ

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/dKAwFEnq2COdl5GNDrDVpmERmLZGUvBJ',
      accounts: ['0711be6a907af13ffefd04256cc004ca425c51f239a2c20891f841e3829248b1']

    }
  }
};