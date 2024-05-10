const Product = require('../models/product');


module.exports = {
    postAddProduct: async (req, res, next) => {
      try {
        const { name, price, description,img_url,quantity } = req.body;
        const newProduct = new Product({
            name: name,
            price: price,
            description: description,
            img_url: img_url,
            quantity: quantity,
        });
        await newProduct.save((err, product) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error adding product');
            } else {
                res.status(201).json(product);
            }
        });
      } 
      catch (error) { 
        console.log(error)
       }
    },
  }