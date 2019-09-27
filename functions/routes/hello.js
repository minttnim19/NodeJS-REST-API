// import lib
const express = require('express');
// define variable
const route = express.Router();

route.get('/', (req, res) => {
    res.send({message: 'Hello is method GET'})
});
route.post('/', (req, res) => {
    res.send({message: 'Hello is method POST'})
});
route.put('/', (req, res) => {
    res.send({message: 'Hello is method PUT'})
});
route.patch('/', (req, res) => {
    res.send({message: 'Hello is method PATCH'})
});
route.delete('/', (req, res) => {
    res.send({message: 'Hello is method DELETE'})
});


module.exports = route;