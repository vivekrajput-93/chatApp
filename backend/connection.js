const mongoose = require('mongoose');
require("dotenv").config()


mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    // Your code here
  })
  .catch((err) => {
    console.error('MongoDB connection error', err);
  });

