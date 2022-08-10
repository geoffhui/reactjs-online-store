const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { getUser } = require('../controllers/getUser');

// Login verification
function verifyJWT(req, res, next) {
   const token = req.headers['x-access-token']?.split(' ')[1]

   if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
         if (err) {
            return res.json({
               isLoggedIn: false,
               message: 'Failed to Authenticate'
            })
         }

         req.user = {
            id: decoded.id,
            email: decoded.email,
            name: decoded.name,
            phone_number: decoded.phone_number,
            restock_notification: decoded.restock_notification,
            is_guest_account: decoded.is_guest_account,
            is_blocked: decoded.is_blocked
         }
         next()
      })
   } else {
      res.json({
         message: 'Incorrect Token Given',
         isLoggedIn: false
      })
   }
}

// api route
router.get('/getUser', verifyJWT, getUser);

module.exports = router;