const express = require('express');
const app = express();
const router = require('./router.js');
const middleware = require('./middleware.js');


app.use('/', middleware, router);


app.listen(3000, () => {
  console.log('mightySignal listening on port 3000.');
});
