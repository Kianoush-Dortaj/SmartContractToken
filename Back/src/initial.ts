
const tether = require('./../build/Tether.json');
const decentralBank = require('./../build/DecentralBank.json');
const rwd = require('./../build/RWD.json');

export default new class InitalContract {



    async Initial() {


        let networkId = await global.web3.eth.net.getId();

        //tether
        let tetherData = await tether.networks['5777'];
        console.log('tether', tether.networks)
        // if (tetherData) {

        global.teter = new global.web3.eth.Contract(tether.abi, tetherData.address);
        // }

        //RWD
        let rwdData = await rwd.networks['5777'];
        console.log('rwd', rwdData.networks)

        // console.log(rwdData)

        // if (rwdData) {

        global.rwd = new global.web3.eth.Contract(rwd.abi, rwdData.address);

        // }

        //DecentralBank
        let decentralBankData = await decentralBank.networks['5777'];
        console.log('dec', decentralBankData.networks)
        // console.log(decentralBankData)
        // if (decentralBankData) {

        global.decentralBank = new global.web3.eth.Contract(decentralBank.abi, decentralBankData.address);

        // }

    }

}