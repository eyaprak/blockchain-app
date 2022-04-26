// https://eth-ropsten.alchemyapi.io/v2/8urBrWXsFRQFO6K6RqJZpMPLLscNUweP

require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/8urBrWXsFRQFO6K6RqJZpMPLLscNUweP',
      accounts: ['bc9b02d696e14a09c7ce7a02ade47bac953aa2b15b3371a8b7c923a1f44eb325']
    }
  }
}