//31 Implementation of Event bus

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());             

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post('http://posts:4000/events', event);
    
    res.send({ status: 'OK' });
});

app.listen(4005, () => { 
    console.log('Listening on port 4005')
});
