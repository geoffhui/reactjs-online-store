const express = require('express');
const router = express.Router();

const { getProducts } = require('../controllers/products');

// api route
router.get('./products', getProducts);

module.exports = router;