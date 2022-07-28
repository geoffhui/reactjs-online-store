const productSchema = require('../models/productSchema');

exports.getProducts = async (req, res) => {
   const productList = await productSchema.find({}).sort({product_name: 1})
   res.status(200).json({
      products: productList
   })
}