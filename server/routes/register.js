const express = require('express');
const router = express.Router();

const { postRegister } = require('../controllers/register');

router.post('/register', postRegister)

module.exports = router;