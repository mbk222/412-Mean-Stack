const router = require("express").Router();
const fetch = require("node-fetch"); // to define fetch()
require("dotenv").config(); // to read .env

// REDIS
const redis = require("redis");
const client = redis.createClient(6739);

router.get("/", async (req, res) => {
  const city = req.body.city;
  const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`; // key stored in .env file

  try {
    // Check the redis store for the data first
    client.get(city, async (err, data) => {
      if (data) {
        return res.status(200).send({
          error: false,
          message: `Response from cache ${data}`,
          result: JSON.parse(data)
        });
      } else {
        // When the data is not found in the cache then we can make request to the server

        const response = await fetch(url_api);

        const data = await response.json();

        // save the record in the cache for subsequent request
        client.setex(city, 30, JSON.stringify(data));

        // return the result to the client
        return res.status(200).send({
          error: false,
          message: `Response from cache ${data}`,
          result: data
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

