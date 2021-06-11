import express from 'express'
const app = express();





// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world, lets go!');
});

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.listen(3000, () => {
  console.log('teste')
})