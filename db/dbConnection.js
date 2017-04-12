const bluebird = require('bluebird');
const monitor = require('pg-monitor');

const dbConfiguration = process.env.DATABASE_URL || {
  host:'localhost',
  port: '5432',
  database: 'mightysignaldb',
};

const options = {
  promiseLib: bluebird
};

const pgp = require('pg-promise')(options);

monitor.attach(options);

const db = pgp(dbConfiguration);

module.exports = db;
