const bluebird = require('bluebird');
const monitor = require('pg-monitor');
console.log(process.env.DATABASE_URL);

const dbConfiguration = process.env.DATABASE_URL || {
  host:'localhost',
  port: '5432',
  database: 'mightysignaldb',
  ssl: true
};

const options = {
  promiseLib: bluebird
};

const pgp = require('pg-promise')(options);

monitor.attach(options);

const db = pgp(dbConfiguration);

module.exports = db;
