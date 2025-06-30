const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // allow all origins
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/profiles', async (req, res) => {
  try {
    const response = await axios.get('https://www.hunqz.com/api/opengrid/profiles/msescortplus');
    res.json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(500).send('Proxy error');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy running at http://localhost:${PORT}`);
});
