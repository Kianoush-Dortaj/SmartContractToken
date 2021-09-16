import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
declare let window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Token';
  accountNumber: string = '';
  constructor() {

  }

  ngOnInit() {

    this.enableMetaMaskAccount()
      .then(async (data) => {
        // console.log('in web', data[0])
        if (data) {
          // const web3 = window.web3;
          // const oldProvider = web3.currentProvider; // keep a reference to metamask provider
          // let myWeb3 = new Web3(oldProvider);  // now you can use myWeb3 instead of web3
          console.log(data)
          // const accounts = await web3.eth.getAccounts();
          // console.log(accounts)
          // const networkId = await web3.eth.net.getId();
          // this.accountNumber = data[0];
          // console.log(accounts[0]);
        }
      });

  }

  private async enableMetaMaskAccount(): Promise<any> {
    // if (typeof window.ethereum !== 'undefined') {
    //   console.log('MetaMask is installed!');
    // }
    // let enable = false;
    // enable = window.ethereum.enable();
    // if (enable) {
    //   return enable;
    // }
    // return 'We Can not Find Any Metamask Wallet on your Browser . Please Install and Config Metamask Wallet';

    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      return true;
    }
      alert("Please install MetaMask to use this dApp!");
    return false;
  }
}
