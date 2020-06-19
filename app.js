const express = require('express');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true})); // reads user input

// Import route
const weatherRoute = require('./routes/weather');

// EJS
app.set('view engine', 'ejs');

// Route
app.use('/', weatherRoute);

const port = 3000;

app.listen(port, () => console.log("server up"));