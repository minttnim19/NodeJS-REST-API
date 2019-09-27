// import lib
const express = require('express');
// define variable
const route = express.Router()

route.get('/', (req, res) => {
    res.send({message: 'pong'})
});

module.exports = route;