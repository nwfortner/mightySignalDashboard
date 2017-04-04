const db = require('../../db/dbConnection.js');
const sql = require('../../db/sql/sql.js');


module.exports = {

  getSubscriptions: (req, res) => {
    db.query(sql.subscriptions.getAll)
    .then(subscriptions => {
      res.status(200).json(subscriptions);
      console.log('get to subscriptions successfull.');
    })
    .catch(error => {
      res.status(400).json({
        errorMessage: 'request failed.',
        eroror: error
      });
      console.log('get to subscriptions failed', error);
    });
  },

  addSubscriptions: (req, res) => {
    console.log('request body', req.body);
    db.query(sql.subscriptions.add, req.body)
    .then(id => {
      res.status(201).json({
        message: `user ${id} successfully added to database.`,
        user: id
      });
      console.log(`Post to subscriptions successfull. User ${id} successfully added to database.`);
    })
    .catch(error => {
      res.status(400).json({
        errorMessage: `Failed to add user ${req.body.name} to the database`,
        error: error
      });
      console.log(`Post to subscriptions failed to add user ${req.body.name} to the database`)
    });
  }

};
