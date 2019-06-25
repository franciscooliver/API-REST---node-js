'use strict'

const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer-controller');

router.post('/', customerController.post);

module.exports = router;