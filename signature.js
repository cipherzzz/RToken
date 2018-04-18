var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const signatureObject = web3.eth.accounts.sign('AlphaPoint Data', '0xf1dc8382459081688c9e37c44f0e8d778ce14dac5eb9cc3b9bb234e808bb90a9');
console.log(JSON.stringify(signatureObject));

const signer = web3.eth.accounts.recover(signatureObject.message, signatureObject.signature);
console.log(signer);