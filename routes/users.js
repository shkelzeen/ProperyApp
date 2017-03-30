var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

var controller = require('../controllers/UserController');

router.post('/login', controller.login);
router.post('/sigUp', controller.sigUp);

module.exports = router;

module.exports = router;