// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// ACCEPTANCE CRITERIA:
// Passed: You should provide your own project, not the example URL.
// Passed: A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.
// Passed: A request to /api/whoami should return a JSON object with your software in the software key.
// Passed: A request to /api/whoami should return a JSON object with your preferred language in the language key.

app.get('/api/whoami', function (req, res) {
  const ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const lang = req.headers["accept-language"];

  res.json({ ipaddress: ipAddress, language: lang, software: userAgent });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
