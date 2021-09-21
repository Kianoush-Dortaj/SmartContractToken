var tether = require('./../../build/Tether.json');
var rwd = require('./../../build/RWD.json');

// import Web3 from "web3"


export default new class TetherController {


    constructor() {
        // let tether = Tether.new();
        // global.web3.eth.Contract(Tether.abi,).deploy
    }


    async GetBalance(req: any, res: any, next: any) {

        try {

            let teter;
            let rwdContract;
            let decentralBank;
            let tetherBalance;
            let rwdBalance;
            let decentralBankBalance;
            let model: { balance: string }

            let networkId = await global.web3.eth.net.getId();

            //tether
            let tetherData = await tether.networks[networkId];

            if (tetherData) {

                teter = new global.web3.eth.Contract(tether.abi, tetherData.address);

                let tetherBalanceContract = await teter.methods.balanceOf(req.params.accountNumber).call();
                tetherBalance = await global.web3.utils.fromWei(tetherBalanceContract);
            }

            //RWD
            let rwdData = await rwd.networks[networkId];

            if (rwdData) {

                rwdContract = new global.web3.eth.Contract(rwd.abi, rwdData.address);

                let rwdBalanceContract = await rwdContract.methods.balanceOf(req.params.accountNumber).call();
                rwdBalance = await global.web3.utils.fromWei(rwdBalanceContract);

            }

            //DecentralBank
            let decentralBankData = await tether.networks[networkId];

            if (decentralBankData) {

                decentralBank = new global.web3.eth.Contract(tether.abi, decentralBankData.address);

                let decentralBankBalanceContract = await decentralBank.methods.balanceOf(req.params.accountNumber).call();
                decentralBankBalance = await global.web3.utils.fromWei(decentralBankBalanceContract);

            }

            return res.send({
                tetherBalance: tetherBalance,
                rwdBalance: rwdBalance,
                decentralBankBalance: decentralBankBalance
            }).status(200);

        } catch (error: any) {

            return res.send(error.message).status(400);

        }

    }

}