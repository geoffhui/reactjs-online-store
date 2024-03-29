const user = require('../models/userSchema');
const bcrypt = require('bcrypt');


exports.postRegister = async (req, res) => {
   const userData = req.body

   const takenEmail = await user.findOne({email: userData.email})

   if (takenEmail) {
      res.json({message: "Email has already been taken"})
   } else {
      if (userData.verifyPassword !== userData.password) {
         res.json({message: "Passwords do not match"})
      } else {
         userData.password = await bcrypt.hash(req.body.password, 10)
   
         const dbUser = await new user({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            restock_notification: false,
            is_guest_account: false,
            is_blocked: false
         })
   
         dbUser.save()
         res.json({message: 'Account has been created'})
      }
   }
}