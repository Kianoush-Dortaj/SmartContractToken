import assert from 'assert';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import * as KiaToken from '../build/KIA.json';


// const web3 = new Web3('https://ropsten.infura.io/v3/afa51bf9aa97452d90cbc4713d14888d');
const web3 = new Web3('HTTP://127.0.0.1:7545');


describe("Kiaswap Contract", () => {

    let rapstoneAddress = '0xeb16B816CC05bdECD9f50155c0BA6DDE073EC759';
    let initSupply = 99999999999999999999999999999999999999999;
    let TokenName = 'KIA';
    let tokenSymbol = 'LION';
    let decimalUnits = 8;
    let accounts: string[];
    let token: any;

    beforeEach(async () => {

        accounts = await web3.eth.getAccounts();
        // rapstoneAddress = accounts[0];

        token = await new web3.eth.Contract(KiaToken.abi as AbiItem[])
            .deploy({
                data: KiaToken.evm.bytecode.object,
                arguments: [rapstoneAddress, initSupply, TokenName, tokenSymbol, decimalUnits]
            });
        // console.log(token)
    })

    it('Owner ', async () => {
       await token.methods.BuyToken(100).send({
            from: '0xD021414FD8e860d3cfe632157E93E56b3F93FA93',
            value: 10
        });

    })


})

