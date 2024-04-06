const express = require('express');
const axios = require('axios');
const app = express();

const weatherUrl = 'https://api.meteo.lt/v1/places/vilnius/forecasts/long-term';

app.get('/weather', async (req, res) => {
  try {
    const response = await axios.get(weatherUrl);
    const weatherData = response.data;
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'error fetching weather data.' });
  }
});

app.listen(5000, () => {
  console.log('Server running on on port 5000');
});
