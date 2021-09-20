
const Products = require("../models/product-model")
const {raw} = require("express");

const allProducts = async (req, res, next) => {
    const products = await Products.find().exec()
    res.json(products)
}

const singleProduct = async (req, res, next)=>{
    const id = req.params.id;
    const product = await Products.findById(id)
    res.json(product)
}

const addProduct = async (req, res, next) =>{

    const {title, price} = req.body

    const  newProduct = new Products({
        title: title,
        price: price
    })

    await newProduct.save()
    res.status(201).json({message: "product created"})

}


module.exports.allProducts = allProducts;
module.exports.singleProduct = singleProduct;
module.exports.addProduct = addProduct;