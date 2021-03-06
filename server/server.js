const express = require('express');
const app = express();
const router = require('./router.js');
const middleware = require('./middleware.js');

const port = process.env.PORT || 3000;

app.use('/', middleware, router);


app.listen(port, () => {
  console.log('mightySignal listening on port 3000.');
});
