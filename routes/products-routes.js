const express = require("express"),
    router = express.Router()
    productsControllers = require("../controllers/products-controllers")


router.get('/products', productsControllers.allProducts)
router.get('/products/:id', productsControllers.singleProduct)
router.post('/add-product', productsControllers.addProduct)

module.exports.router = router;