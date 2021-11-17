const express = require('express')
const getResults = require('./controllers/results')
const router = express.Router()

// Home page route
router.get('/', function (req, res) {
  res.send('Welcome');
})

// Search route
router.get('/search/:term', function (req, res) {
  res.json(getResults(req.params.term))
})

module.exports = router;