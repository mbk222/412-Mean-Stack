const router = require('express').Router();
const fetch = require('node-fetch');        // to define fetch()
require('dotenv').config();                 // to read .env 


// REDIS
const redis = require('redis');
const client = redis.createClient(6739);

router.get('/', (req, res) => {
    res.render("index", {
        city: null,
        des: null,
        icon: null,
        temp: null
    });
})

router.post('/', async (req,res) => {
    const city = req.body.city;
    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`; // key stored in .env file

    try {
        await fetch(url_api) 
                .then(res => res.json())
                .then(data => {
                    if (data.message === "city not found") {
                        res.render('index', {
                            city: data.message,
                            des: null,
                            icon: null,
                            temp: null
                        }) 
                    } else { // City found
                        const info = {
                            "city" : data.name,
                            "des"  : data.weather[0].description,
                            "icon" : data.weather[0].icon,
                            "temp" : data.main.temp
                        }
                        const info_JSON = JSON.stringify(info); // creates JSON 
                        client.setex(city, 30, info_JSON);  // caches JSON to redis only if key does not already exist, expires in 30 seconds
                        
                        const city = data.name;
                        const des = data.weather[0].description;
                        const icon = data.weather[0].icon;
                        const temp = kelvinF(data.main.temp).toFixed(1); // API returns temp in K, it is converted to F here.

                        res.render('index', {
                            //city, des, icon, temp
                            info_JSON // rendering from JSON
                        })
                    }
                });
    } catch(err) {
        res.render('index', {
            city: 'something went wrong',
            des: null,
            icon: null,
            temp: null
        })
    }

    
})



module.exports = router;

const kelvinF = (k) => {  return 9/5 * (k - 273.15) + 32 } // K to F conversion

