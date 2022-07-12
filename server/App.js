const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();


// database
mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => console.log("Database Connected."))
   .catch(err => console.log("Database Connection Error"), err);


// middleware
app.use(morgan('morgan'))
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());


// routes



// port
const port = process.env.PORT || 8080;


//listener
const server = app.listen(port, () => {
   console.log(`Server is running on port ${port}`)
});