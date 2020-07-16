require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { WebClient } = require('@slack/web-api');
const ngrok = require('ngrok');
const http = require('http');
const axios = require('axios');
const api = require('./api');
const modalView = require('./payload');

// Read a token from the environment variables
// const token = process.env.SLACK_TOKEN;
const token = process.env.SLACK_TOKEN;
const slack_url = process.env.SLACK_URL;

// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json({ verify: rawBodyBuffer }));

(async function() {
  const url = await ngrok.connect();
})();

// Initialize
const web = new WebClient(token);

// const openModal = async () => {

//   const result = await web.views.open({
//     trigger_id: trigger,
//     view: {
//       type: 'modal',
//       callback_id: 'view_identifier',
//       title: {
//         type: 'plain_text',
//         text: 'Modal title'
//       },
//       submit: {
//         type: 'plain_text',
//         text: 'Submit'
//       },
//       blocks: [
//         {
//           type: 'input',
//           label: {
//             type: 'plain_text',
//             text: 'Input label'
//           },
//           element: {
//             type: 'plain_text_input',
//             action_id: 'value_indentifier'
//           }
//         }
//       ]
//     }
//   });

//   // The result contains an identifier for the root view, view.id
//   console.log(`Successfully opened root view ${result.view.id}`);
// };

app.post('/actions', async (req, res) => {
  console.log('test')
  const payload = JSON.parse(req.body.payload);
  const { type, user, view } = payload;
  console.log(res)
  console.log(payload)

  let result = await openModal(payload)

  console.log(result)
  
  return result;
});

const openModal = async (payload) => {

  const viewData = {
    token: token,
    trigger_id: payload.trigger_id,
    view: modalView
  }

  return await api.callAPIMethod('views.open', viewData)
};

openModal();

app.listen(3000);