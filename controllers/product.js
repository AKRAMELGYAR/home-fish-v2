const Product = require('../models/product');
const appError = require('../util/AppErorr')

const  postAddProduct = async (req, res, next) => {
  
    const { name, price, description,img_url,quantity } = req.body;
    const newProduct = new Product({
      name: name,
      price: price,
      description: description,
      img_url: img_url,
      quantity: quantity,
    })
    await newProduct.save()
    .then(()=>{
      res.status(201).json({ status : "SUCCESS" ,Product : newProduct})
      console.log(newProduct)
    })
    .catch((err)=>{console.log(err)}) 
} 

const  getProducts = async(req, res, next)=>{
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getProduct = async(req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
  postAddProduct,
  getProducts,
  getProduct
}