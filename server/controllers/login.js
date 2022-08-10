const user = require('../models/userSchema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();


exports.postLogin = async (req, res) => {
   const userLoggingIn = req.body;

   user.findOne({email: userLoggingIn.email})
      .then(dbUser => {
         if (!dbUser) {
            return res.json({
               message: 'Invalid email'
            })
         } else {
            bcrypt.compare(userLoggingIn.password, dbUser.password)
               .then(isCorrect => {
                  if (isCorrect) {
                     const payload = {
                        id: dbUser._id,
                        email: dbUser.email,
                        name: dbUser.name,
                        phone_number: dbUser.phone_number,
                        restock_notification: dbUser.restock_notification,
                        is_guest_account: dbUser.is_guest_account,
                        is_blocked: dbUser.is_blocked
                     }
                     jwt.sign(
                        payload,
                        process.env.JWT_SECRET,
                        {expiresIn: 86400},
                        (err, token) => {
                           if (err)
                              return res.json({message: err})
                           return res.json({
                              message: 'Successfully Logged In',
                              token: "Bearer " + token
                           })
                        }
                     )
                  } else {
                     return res.json({
                        message: 'Invalid email or password'
                     })
                  }
                  
               })
         }
      })
}