const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

const sql = (file) => {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, {minify: true});
};

module.exports = {
  extensions: {
    create: sql('extensions/create.sql')
  },
  subscriptions: {
    create: sql('subscriptions/create.sql'),
    add: sql('subscriptions/add.sql'),
    getAll: sql('subscriptions/getAll.sql')
  }
};
