import express from 'express';
import router from './router/Router';
import { DatabaseType } from './DatabaseWrapper/DataBaseType';
import DatabaseWrapper from './DatabaseWrapper/DatabaseWrapper';
import Web3 from "web3";
declare global {
    var web3: Web3;
}

// const url = "https://ropsten.infura.io/v3/afa51bf9aa97452d90cbc4713d14888d";
const web3 = new Web3('HTTP://127.0.0.1:7545');
global.web3 = web3;
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

new DatabaseWrapper(DatabaseType.MongoDBRegular).connect();

app.use(router)

app.listen(port, () => {
    console.log(`The application is listening on port ${port}`);
})
