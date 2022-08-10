const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// app
const app = express();


// database
mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => console.log("Database Connected."))
   .catch(err => console.log('DB CONNECTION ERROR', err));


// middleware
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());


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


// routes
app.get('/getUser', verifyJWT, (req, res) => {
   res.json({
      isLoggedIn: true,
      name: req.user.name,
      email: req.user.email
   })
})

const productsRoute = require('./routes/products');
app.use('/', productsRoute);

const registerRoute = require('./routes/register');
app.use('/', registerRoute);

const loginRoute = require('./routes/login');
app.use('/', loginRoute);


// port
const port = process.env.PORT || 8080;


//listener
const server = app.listen(port, () => {
   console.log(`Server is running on port ${port}`)
});