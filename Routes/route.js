const express = require('express');
const router = express.Router();
const app = express();
const productValaditionSchema = require('../Schema/ProductValidationShema/productValidationSchema');
const { checkSchema } = require("express-validator");
const { getProducts, addProduct, removeProduct, updateProduct } = require('../Controllers/ProductsControllers.js/productsController');
const getProductIndex = require('../Middleware/getProductIndex');

router.get('/products', getProducts);
router.post('/addProducts', checkSchema(productValaditionSchema), addProduct);
router.delete('/removeProduct/:id', getProductIndex, removeProduct);
router.put('/updateProduct/:id', checkSchema(productValaditionSchema), getProductIndex, updateProduct)

module.exports = router;
