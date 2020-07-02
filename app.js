const express = require('express');
const app = express();


//Middleware
app.use(express.urlencoded({ extended: true })) // to read form

// Use View Engine
app.set('view engine', 'ejs'); // for render

// Import Route
const weatherRoute = require('./routes/weather.js');

// Middleware Route
app.use('/', weatherRoute);
app.use('/search', weatherRoute);


app.listen(3000, () => {
  console.log('server up');
});