const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   product_sku: {
      type: String,
      required: true,
      unique: true
   },
   product_name: {
      type: String,
      required: true
   },
   quantity: {
      type: Number,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   is_on_sale: {
      type: Boolean,
      required: true,
      default: false
   },
   discount_type: {
      type: String,
      enum: ['none', 'percent', 'amount'],
      required: true,
      default: 'none'
   },
   discount_value: {
      type: Number,
      required: true,
      default: 0
   },
   sale_start_date: {
      type: Date,
      required: false
   },
   sale_end_date: {
      type: Date,
      required: false
   },
   total_sold_to_date: {
      type: Number,
      required: true
   },
   weight: {
      type: Number,
      required: true
   },
   length: {
      type: Number,
      required: true
   },
   width: {
      type: Number,
      required: true
   },
   height: {
      type: Number,
      required: true
   },
   image_url: {
      type: String,
      required: true
   },
   keywords: {
      type: [String],
      required: true,
      default: []
   }
})

module.exports = mongoose.model('products', productSchema)