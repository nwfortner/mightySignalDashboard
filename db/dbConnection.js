const bluebird = require('bluebird');
const monitor = require('pg-monitor');

const options = {
  promiseLib: bluebird
};

const pgp = require('pg-promise')(options);

monitor.attach(options);

const dbConfiguration = {
  host:'localhost',
  port: '5432',
  database: 'mightysignaldb'
};

const db = pgp(dbConfiguration);

module.exports = db;
