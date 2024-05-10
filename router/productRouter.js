const express = require('express');
const product = require('../controllers/product');
const router = express.Router();

router.post('/add_product' , product.postAddProduct)

module.exports = router;