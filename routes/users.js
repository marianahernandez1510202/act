// routes/users.js
var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res) { // Removido 'next' no usado
  res.send('respond with a resource');
});

module.exports = router;

