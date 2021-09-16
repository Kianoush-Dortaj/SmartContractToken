
const assert = require("assert");
const web3 = require("web3");

const Tether = artifacts.require("Tether");
const RWD = artifacts.require("RWD");
const DecentralBank = artifacts.require("DecentralBank");


require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('DecentralBank', ([owner, customer]) => {

    let tether;
    let decentralBank;
    let rwd;

    function token(number) {
        return web3.utils.toWei(number, 'ether');
    }

    beforeEach(async () => {

        tether = await Tether.new();
        rwd = await RWD.new();
        decentralBank = await DecentralBank.new(rwd.address, tether.address);
        await rwd.transfer(decentralBank.address, token('100000'));

        await tether.transfer(customer, token('100'), { from: owner })

    })

    describe("Tether", () => {
        it('Math Tether Deployment Name', async () => {
            let tether = await Tether.new();
            const name = await tether.name();
            assert(name, 'Tether');
        })
    })

    describe("RWD", () => {
        it('Math RWD Deployment Name', async () => {
            let rwd = await RWD.new();
            const name = await rwd.name();
            assert(name, 'Reward Token');
        })
    })

    describe("Decentral Bank", () => {
        it('Math DecentralBank Deployment Name', async () => {
            let rwd = await RWD.new();
            const name = await rwd.name();
            assert(name, 'Reward Token');
        })


        it('Send Token To Customer', async () => {
            await rwd.transfer(decentralBank.address, token('100000'));

            await tether.transfer(customer, token('100'), { from: owner })
  
        })

        
        it('Contract Has Token', async () => {
          let balance=  await rwd.balanceOf(decentralBank.address);
          assert.equal(balance,token('100000'))
        })


        it('Issue Token', async () => {
           await decentralBank.issuToken({from:owner});
          })
    })


})
