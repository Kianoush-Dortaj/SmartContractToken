import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private httpClient: HttpClient) {

    }

    getAccountBalance(account: string): Observable<any> {
        return this.httpClient.get<any>('localhost:3000/account/balanceInfo/' + account);
    }

}