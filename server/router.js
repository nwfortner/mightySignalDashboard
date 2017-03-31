const router = require('express').Router();
const subscriptionsRouter = require('./routes/subscriptions.js');

router.use('/subscriptions', subscriptionsRouter);

module.exports = router;
