const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/auth', authController.obtainAuthToken);

module.exports = router;