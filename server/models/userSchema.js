const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   full_name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   phone_number: {
      type: String,
      required: false
   },
   restock_notification: {
      type: Boolean,
      required: true,
      default: false
   },
   is_guest_account: {
      type: Boolean,
      required: true,
      default: false
   },
   is_blocked: {
      type: Boolean,
      required: true,
      default: false
   },
   shipping_address_id: {
      type: String,
      required: false
   },
   payment_info_id: {
      type: String,
      required: false
   }
})

module.exports = mongoose.model('accounts', userSchema)