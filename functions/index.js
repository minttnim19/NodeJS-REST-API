const functions = require('firebase-functions');
// import express & define port = 3000
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// automatically allow cross-origin requests
app.use(cors({origin: true}));
// set use body json
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('welcome express.js');
});

// add route
const pingRoute = require('./routes/ping');
app.use('/ping', pingRoute);

const helloRoute = require('./routes/hello');
app.use('/hello', helloRoute);

// 404
app.use((req, res, next) => {
    return res.status(404).send({message: 'Route' + req.url + ' Not found.'});
});

// 500 - Any server error
app.use((err, req, res, next) => {
    return res.status(500).send({error: err});
});

// set port & run server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

exports.app = functions.https.onRequest(app);
