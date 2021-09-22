import express from 'express';
import router from './router/Router';
import { DatabaseType } from './DatabaseWrapper/DataBaseType';
import DatabaseWrapper from './DatabaseWrapper/DatabaseWrapper';
import Web3 from "web3";
import initial from './initial';
import cors from 'cors';

// declare global {
//     var web3: Web3;
//     var teter: any;
//     var rwd: any;
//     var decentralBank: any;
// }
declare global {
    var web3: Web3;
    var teter: any;
    var rwd: any;
    var decentralBank: any;
}
export default new class {

    constructor() {

        const allowedOrigins = ['http://localhost:3472'];

        const options: cors.CorsOptions = {
            origin: allowedOrigins
        };

        const web3 = new Web3('https://ropsten.infura.io/v3/afa51bf9aa97452d90cbc4713d14888d');
        global.web3 = web3;

        this.Initial();

        const app = express();
        const port = process.env.PORT || 3000;
        app.use(cors(options));
        app.use(express.json());

        new DatabaseWrapper(DatabaseType.MongoDBRegular).connect();

        app.use(router)

        app.listen(port, () => {
            console.log(`The application is listening on port ${port}`);
        })
    }

    async Initial() {
        await initial.Initial();
    }

}

// const url = "https://ropsten.infura.io/v3/afa51bf9aa97452d90cbc4713d14888d";


