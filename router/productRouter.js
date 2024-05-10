const express = require('express');
const product = require('../controllers/product');
const router = express.Router();

router.post('/add_product' , product.postAddProduct)
router.get('/get_products' , product.getProducts)
router.get('/get_product/:productId' , product.getProduct)

module.exports = router;