const express = require('express');
const axios = require('axios');
const app = express();

app.get('/weather', async (req, res) => {
  try {
    const city = req.query.city || 'Kaunas';
    const weatherUrl = `https://api.meteo.lt/v1/places/${city}/forecasts/long-term`;

    const response = await axios.get(weatherUrl);
    const weatherData = response.data;
    res.json(weatherData);
    console.log(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'error fetching weather data.' });
  }
});

app.listen(5000, () => {
  console.log('Server running on on port 5000');
});
