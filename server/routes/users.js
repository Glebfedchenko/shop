const express = require('express');
const userCtrl = require('../controllers/users');
const {auth} = require('../middleware/auth');

const router = express.Router();

router.route('/register').post(userCtrl.register);
router.route('/login').post(userCtrl.login);
router.route('/auth').get(auth, userCtrl.authenticate);
router.route('/logout').get(auth, userCtrl.logout);

module.exports = router;
