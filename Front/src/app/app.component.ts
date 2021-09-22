import { Component } from '@angular/core';
import { AppService } from './services/app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETB';

  accountNumber: string = '0x2Eb06eB1aAe93c89fe05576262dc29Ee183d2D04';

  tetherBalance: string='';;
  rwdBalance: string = '';
  decentralBankBalance: string ='';

  constructor(private appService: AppService) {
    this.getBalance();
  }

  getBalance(): void {
    this.appService.getAccountBalance(this.accountNumber).subscribe(data => {
      console.log(data);
    })
  }
}
