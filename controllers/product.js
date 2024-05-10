const Product = require('../models/product');
const appError = require('../util/AppErorr')

const  postAddProduct = async (req, res, next) => {
  try{
          const { name, price, description,img_url,quantity } = req.body;
        const newProduct = new Product({
            name: name,
            price: price,
            description: description,
            img_url: img_url,
            quantity: quantity,
        })
        await newProduct.save();
        res.status(201).json({ status : "SUCCESS" ,Product : newProduct});
      }catch{
        const error = appError.create('Error adding product', 500, "fail")
        return next(error)
      }
    }  

module.exports = {
  postAddProduct
}