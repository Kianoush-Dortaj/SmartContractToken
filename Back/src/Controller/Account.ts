var tether = require('./../../build/Tether.json');
var rwd = require('./../../build/RWD.json');

// import Web3 from "web3"


export default new class AccountController {


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

            // USDT

            let tetherBalanceContract = await global.teter.methods.balanceOf(req.params.accountNumber).call();
            tetherBalance = await global.web3.utils.fromWei(tetherBalanceContract);


            //RWD

            let rwdBalanceContract = await global.rwd.methods.balanceOf(req.params.accountNumber).call();
            rwdBalance = await global.web3.utils.fromWei(rwdBalanceContract);

            //DEC
 
            let decentralBankBalanceContract = await global.decentralBank.methods.stackingBalance(req.params.accountNumber).call();
            decentralBankBalance = await global.web3.utils.fromWei(decentralBankBalanceContract);


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