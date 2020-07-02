const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config();

 router.get('/', (req, res) => {
   res.render("index", { // default empty display
     city: null,
     des: null,
     icon: null,
     temp: null
   })  
 })

 router.get('/search', async (req, res) => {
   console.log(1);
   const city = req.query.city;
   const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`; // key stored in .env file
   fetch(url_api)
   .then(res => res.json())
   .then(data => {
    res.send(data);
   })
 })

 router.post('/', async (req, res) => {
   console.log(2)
   const city = req.body.city;
   const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`; // key stored in .env file
   console.log(city);
   try {
     await fetch(url_api)
     .then(res => res.json())
     .then(data => {
       if (data.message === 'city not found') {
         res.render('index', {
           city: data.message,
           des: null,
           icon: null,
           temp: null
         })
       } else {
         const city = data.name;
         const des = data.weather[0].description;
         const icon = data.weather[0].icon;
         const temp = data.main.temp;
         res.render('index', {
           city, des, icon, temp
         })
       }
     });

   } catch (err) {
    res.render('index', {
      city: 'something went wrong',
      des: null,
      icon: null,
      temp: null
    })
   }
  //  fetch(url_api)
  //   .then(res => res.json())
  //   .then(data => console.log(data));
 })


module.exports = router;