const Koa = require('koa');
const app = new Koa();
const { WebClient } = require('@slack/web-api');
const ngrok = require('ngrok');
const fetch = require('node-fetch');
require('dotenv').config();

// Read a token from the environment variables
const token = process.env.SLACK_TOKEN;
const slack_url = process.env.SLACK_URL;

app.use(async ctx => {
  ctx.body = 'Hello World';
});

(async function() {
  const url = await ngrok.connect();
  console.log(url, "URL")
})();

// Initialize
const web = new WebClient(token);

let response = [];
const data = () => {
  return fetch(slack_url)
  .then(res => res.json())
  .then(data => response = data)
  
  
}

data();
app.listen(3000);