const router = require('express').Router();

const userRoutes = require('./users-routes');
router.use('/users', userRoutes);

const partyRoutes = require('./parties-routes');
router.use('/parties', partyRoutes);

module.exports = router;
