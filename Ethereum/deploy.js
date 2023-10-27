const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

require('dotenv').config();

// const provider = new HDWalletProvider(
//     process.env.mnemonic,
//     process.env.link
// );
const provider = new HDWalletProvider("be6353934b949d3045e4573d9b53355dcc6e3858f71348a1282e391f9ca0c899","http://127.0.0.1:7545");

const web3 = new Web3(provider);
const deploy = async () => {
    // const accounts = '0x9a7C80b94bc013C3861ad4fcf35A12159F5C581c';
    const accounts = await web3.eth.getAccounts();
    console.log('Attemping to deploy to accounts ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ from: accounts[0] });

    console.log('Contract deploy to ', result.options.address);
};

deploy();