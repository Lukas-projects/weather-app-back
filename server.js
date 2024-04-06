const express = require('express');
const app = express();

app.get('/weather-app', (req, res) => {
  res.json({ users: ['userOne', 'userTwo', 'userThree', 'userFour'] });
});

app.listen(5000, () => {
  console.log('Server running on on port 5000');
});
