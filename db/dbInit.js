const db = require('./dbConnection.js');
const sql = require('./sql/sql.js');


db.tx(t => {
  return t.batch( [
    t.query(sql.extensions.create),
    t.query(sql.subscriptions.create)
  ]);
})
.then(() => {
  console.log('Database mightySignal was initialized successfully.');
})
.catch(error => {
  console.error('FAIL...Database mightySignal was not initialized.', error);
});
