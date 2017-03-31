const router = require('express').Router();
const subscriptionsHandler = require('../handlers/subscriptions.js');

router.route('/')
.get(subscriptionsHandler.getSubscriptions)
.post(subscriptionsHandler.addSubscriptions);

module.exports = router;
