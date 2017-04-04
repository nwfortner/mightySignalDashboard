const db = require('./dbConnection.js');
const pgp = require('pg-promise')();
const requestPromise = require('request-promise');


const requestPromiseOptions = {
  uri: 'https://mightysignal.com/challenge/payment_seed',
  json: true
};

requestPromise(requestPromiseOptions)
.then(subscriptions => {
  const columnSet = pgp.helpers.ColumnSet(['name', 'amount', 'date'], {table: 'subscriptions'});
  const query = pgp.helpers.insert(subscriptions, columnSet);
  return db.query(query);
})
.catch(error => {
  console.error('FAIL...dbSeed.js failed to seed mightySignalDB', error);
});
