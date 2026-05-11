const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/api/auth', require('./auth'));
router.use('/api/posts', require('./post'));
router.use('/api/users', require('./user'));

module.exports = router;
