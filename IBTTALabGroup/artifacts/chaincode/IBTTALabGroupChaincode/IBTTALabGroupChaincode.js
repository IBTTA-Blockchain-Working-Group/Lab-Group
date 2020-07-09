/*
Add data to the State

===================== Add new Accounts ==============================
peer chaincode invoke -n cc -C channel1 -c '{"Args":["addAccount","12345","1"]}'
peer chaincode invoke -n cc -C channel1 -c '{"Args":["addAccount","67890","0"]}'


==================== Query Account data =================
peer chaincode query -C channel1 -n cc -c '{"Args":["queryAccount", "12345"]}'

=================== Change Account Status ===================
peer chaincode invoke -C channel1 -n cc -c '{"Args":["changeAccountStatus", "12345", "0"]}'

=================== Add new transactions ===================
peer chaincode invoke -C channel1 -n cc -c '{"Args":["addTransaction", "12345", "A", "2" , "4/18/2020", "1"]}'
peer chaincode invoke -C channel1 -n cc -c '{"Args":["addTransaction", "67890", "B", "3" , "4/20/2020", "0"]}'

==================== Query transaction data based on transaction id =================
peer chaincode query -C channel1 -n cc -c '{"Args":["queryTransaction", "1"]}'

==================== Query transaction data based on Host =================
peer chaincode query -C channel1 -n cc -c '{"Args":["queryTransactionsByHost", "A"]}'

*/

const shim = require('fabric-shim');
const util = require('util');
const fs = require('fs');

var Chaincode = class {

  // Initialize the chaincode
  async Init (stub){
    console.info('=========== Instantiated fabcar chaincode ===========');
    let allTransactions = {};
    allTransactions.totalTransactions = 0;
    await stub.putState("TRANSACTIONS", Buffer.from(JSON.stringify(allTransactions)));
    return shim.success();
  }

  async Invoke(stub) {
    let ret = stub.getFunctionAndParameters();
    console.info(ret);
    let method = this[ret.fcn];
    if (!method) {
      console.log('no method of name:' + ret.fcn + ' found');
      return shim.success();
    }
    try {
      let payload = await method(stub, ret.params, this);
      return shim.success(payload);
    } catch (err) {
      console.log(err);
      return shim.error(err);
    }
  }

  async addAccount (stub,args) {
    console.log('========Ledger Initialization========');

    // initialise only if 2 parameters passed.
    if (args.length != 2) {
      return shim.error('Incorrect number of arguments. Expecting 2');
    }
    let accountID = args[0];
    let accountStatus = args[1];


    let account = {};
    account.docType = 'account';
    account.accountID = accountID;
    account.accountStatus = accountStatus;

    await stub.putState(accountID, Buffer.from(JSON.stringify(account)));

    console.info('============= END : Added account ===========');

   }

  async changeAccountStatus(stub, args) {
    console.info('============= START : changeAccountStatus ===========');
    if (args.length != 2) {
      throw new Error('Incorrect number of arguments. Expecting 2');
    }

    let accountAsBytes = await stub.getState(args[0]);
    let account = JSON.parse(accountAsBytes);
    account.accountStatus = args[1];

    await stub.putState(args[0], Buffer.from(JSON.stringify(account)));
    console.info('============= END : changeAccountStatus ===========');
  }

  async queryAccount(stub, args) {
    if (args.length != 1) {
      throw new Error('Incorrect number of arguments. Expecting Account Id ex: C032699024');
    }
    let accountID = args[0];

    let accountAsBytes = await stub.getState(accountID); //get the account from chaincode state
    if (!accountAsBytes || accountAsBytes.toString().length <= 0) {
      throw new Error(accountID + ' does not exist: ');
    }
    console.log(accountAsBytes.toString());
    return accountAsBytes;
  }

  async addTransaction(stub,args){
    //expecting accountID, hostAgency, amount, dateTime, transactionStatus
    if (args.length != 5) {
        return shim.error('Incorrect number of arguments. Expecting 5');
    }

    // account should exist in the Blockchain
    let accountAsBytes = await stub.getState(args[0]);
    if (!accountAsBytes || accountAsBytes.toString().length <= 0) {
      throw new Error(accountID + ' does not exist: ');
    }

    //Transaction sould not be older than 30 days
    var transaction_date = new Date(args[3]);
      var today = new Date();
      var timeDiff = Math.abs(today.getTime() - transaction_date.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      if(diffDays > 30){
        throw new Error('Cannot add transactions older than 30 days');
      }

    let staticTransactionAsBytes = await stub.getState("TRANSACTIONS");
    let staticTransactionAsJSON = JSON.parse(staticTransactionAsBytes.toString());
    console.info('============= total transactions so far ===========');
    console.log(staticTransactionAsJSON.totalTransactions);


    let transaction = {}
    transaction.docType = "Transaction";
    transaction.transactionID = staticTransactionAsJSON.totalTransactions + 1;
    transaction.accountID = args[0];
    transaction.hostAgency = args[1];
    transaction.amount = args[2];
    transaction.dateTime = args[3];
    transaction.transactionStatus = args[4];

    await stub.putState(transaction.transactionID.toString(), Buffer.from(JSON.stringify(transaction)));
    staticTransactionAsJSON.totalTransactions = transaction.transactionID;
    await stub.putState("TRANSACTIONS", Buffer.from(JSON.stringify(staticTransactionAsJSON)) );

    console.info('=============Transactions successfully added ===========');


  }

  async queryTransaction(stub, args) {
    if (args.length != 1) {
      throw new Error('Incorrect number of arguments. Expecting transaction Id ex: 5');
    }
    let transactionID = args[0];

    let transactionAsBytes = await stub.getState(transactionID); //get the account from chaincode state
    if (!transactionAsBytes || transactionAsBytes.toString().length <= 0) {
      throw new Error(transactionID + ' does not exist: ');
    }
    console.log(transactionAsBytes.toString());
    return transactionAsBytes;
  }
  
  
  async queryTransactionsByHost(stub, args, thisClass) {
    if (args.length < 1) {
      throw new Error('Incorrect number of arguments. Expecting host name.')
    }

    let hostAgency = args[0];
    let queryString = {};
    queryString.selector = {};
    queryString.selector.docType = 'Transaction';
    queryString.selector.hostAgency = hostAgency;
    let method = thisClass['getQueryResultForQueryString'];
    let queryResults = await method(stub, JSON.stringify(queryString), thisClass);
    return queryResults; //shim.success(queryResults);
  }

};

shim.start(new Chaincode());
