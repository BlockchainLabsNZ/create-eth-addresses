var Accounts = require('web3-eth-accounts');

var accounts = new Accounts();

let new_account;
for (let i = 0; i < 75; i++) {
  new_account = accounts.create();
  console.log({
    'private_key': new_account['privateKey'],
    'address': new_account['address']});
}
