const productsData = require('../../Data/Products');
const { validationResult, matchedData } = require('express-validator');
const getProductIndex = require('../../Middleware/getProductIndex');
const getProducts = (req, res) => {
    res.status(200).send(productsData);
}

const addProduct = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map(error => error.msg) });
    }
    const productData = matchedData(req);
    const newProduct = {
        id: productsData.length + 1,
        ...productData
    };
    productsData.push(newProduct);
    res.status(201).json({
        message: 'Product added successfully',
        product: newProduct
    });
};


const removeProduct = (req, res) => {
    const productIndex = req.productIndex;
    productsData.splice(productIndex, 1);
    res.status(200).json({ message: 'Product removed successfully' });
};


const updateProduct = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map(error => error.msg) });
    }
    const productIndex = req.productIndex;
    const updatedData = matchedData(req);
    productsData[productIndex] = {
        ...productsData[productIndex],
        ...updatedData
    };
    res.status(200).json({
        message: 'Product updated successfully',
        product: productsData[productIndex]
    });

}

module.exports = {
    getProducts, addProduct, removeProduct, updateProduct
};