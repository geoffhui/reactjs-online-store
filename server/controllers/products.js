const productSchema = require('../models/productSchema');

exports.getProducts = async (req, res) => {
   const productList = await productSchema.find({}).sort({name: 1})
   res.status(200).json({
      products: productList
   })
}