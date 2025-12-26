const productValaditionSchema = {
    name: {
        notEmpty: {
            errorMessage: 'productName is required'
        },
        isLength: {
            options: { min: 3, max: 100 },
            errorMessage: 'productName must be between 2 and 100 characters'
        },
        trim: true,
    },
    price: {
        notEmpty: {
            errorMessage: 'Price is required'
        },
        toInt: true // 👈 converts "123" → 123
    },
    category: {
        optional: true,          // 👈 THIS MAKES IT OPTIONAL
        trim: true,
        isLength: {
            options: { min: 3 },
            errorMessage: "Category must be at least 3 characters"
        }
    }
}

module.exports = productValaditionSchema;