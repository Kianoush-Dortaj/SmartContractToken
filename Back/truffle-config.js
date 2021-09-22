var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = "call glow acoustic vintage front ring trade assist shuffle mimic volume reject";
module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: 5777
        },
        ropsten: {
            provider: function () {
                return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/afa51bf9aa97452d90cbc4713d14888d");
            },
            network_id: 3,
            gas: 4700000
        },
    },
    contracts_directory: './src/contracts/',
    contracts_build_directory: './build',
    compilers: {
        solc: {
            version: '^0.8.7',
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}