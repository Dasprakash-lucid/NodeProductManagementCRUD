const productsData = require('../Data/Products');

const getProductIndex = (req, res, next) => {
    const productId = parseInt(req.params.id);
    const productIndex = productsData.findIndex(product => product.id === productId);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    req.productIndex = productIndex;
    next();
}
module.exports = getProductIndex;