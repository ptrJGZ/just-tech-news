const router = require('express').Router();

// this finds and uses index.js in api folder
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;