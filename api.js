require('dotenv').config();

const axios = require('axios');
const apiUrl = 'https://slack.com/api';


const callAPIMethod = async (method, payload) => {

    let result = await axios.post(`${apiUrl}/${method}`, payload, {
        headers: { Authorization: "Bearer " + process.env.SLACK_TOKEN }
    });
    console.log(result.data, "did it make it here?")
    return result.data;
}

module.exports = {
    callAPIMethod
}