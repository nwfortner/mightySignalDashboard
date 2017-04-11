const bluebird = require('bluebird');
const monitor = require('pg-monitor');
console.log(process.env.DATABASE_URL);

let dbConfiguration;

if(process.env.DATABASE_URL) {
  dbConfiguration = {
    host: 'ec2-23-23-227-188.compute-1.amazonaws.com',
    port: '5432',
    databse: 'delgp3pe84hsln',
    user: 'sowcrtcbrpmjsq',
    password: '1ee58d140f90a95690c7d6ae1236caa8a6b52a13d7d644ce3745bd5af3f2c721'
  };
}else {
  dbConfiguration = {
    host:'localhost',
    port: '5432',
    database: 'mightysignaldb',
    ssl: true
  };
}

const options = {
  promiseLib: bluebird
};

const pgp = require('pg-promise')(options);

monitor.attach(options);

const db = pgp(dbConfiguration);

module.exports = db;
