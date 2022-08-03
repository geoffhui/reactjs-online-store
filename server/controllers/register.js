const user = require('../models/user');
const bcrypt = require('bcrypt');
const { titleCase } = require('../../client/src/functions/functions')

exports.postRegister = async (res, req) => {
   const user = req.body

   const takenEmail = await user.findOne({email: user.email})

   if (takenEmail) {
      res.json({message: "Email has already been taken"})
   } else {
      user.password = await bcrypt.hash(req.body.password, 10)

      const dbUser = new user({
         full_name: titleCase(user.full_name),
         email: user.email.toLowerCase(),
         password: user.password,
         phone_number: user.phone_number,
         restock_notification: false,
         is_guest_account: false,
         is_blocked: false
      })

      dbUser.save()
      res.json({message: 'Success'})
   }
}