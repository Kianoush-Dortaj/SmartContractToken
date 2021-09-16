import Tether from './../../build/Tether.json';
// import Web3 from "web3"


export default new class TetherController {


    constructor() {
        // let tether = Tether.new();
        // global.web3.eth.Contract(Tether.abi,).deploy
    }


    async GetBalance(req: any, res: any, next: any) {

        let model: { balance: string }

        let networkId: number = await global.web3.eth.net.getId();
        let tetherData = await Tether.networks[networkId];

        if (tetherData) {
            const tet = new global.web3.eth.Contract(Tether.abi, tetherData.address);
        }

        let getBalance = await global.web3.eth.getBalance(req.params.accountNumber)
        let balance = await global.web3.utils.fromWei(getBalance);

        res.send(balance).status(200);
    }


}