require('dotenv').config();
const express = require('express');
const request = require('request');
var http = require('http');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const app = express();

const PORT=4390;

app.listen(PORT, () => {
  console.log("Listening on port " + PORT)
})

app.get('/', function(req, res) {
  res.send('Ngrok is working! Path Hit: ' + req.url);
});

app.get('/oauth', function(req, res) {
  if (!req.query.code) {
      res.status(500);
      res.send({"Error": "not connecting"});
      console.log("❌");
  } else {
      request({
          url: 'https://slack.com/api/oauth.access', 
          qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret},
          method: 'GET',

      }, function (error, response, body) {
          if (error) {
              console.log(error);
          } else {
              res.json(body);

          }
      })
  }
});

app.post('/command', function(req, res) {
  res.send('Ngrok is running');
});


// We create a function which handles any requests and sends a simple response
function handleRequest(request, response){
  response.end('Ngrok is working! -  Path Hit: ' + request.url);
}

// We create the web server object calling the createServer function. Passing our request function onto createServer guarantees the function is called once for every HTTP request that's made against the server
var server = http.createServer(handleRequest);

// Finally we start the server
server.listen(PORT, function(){
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});