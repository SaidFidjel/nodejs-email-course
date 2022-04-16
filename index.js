const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
})

app.get('/health', (req, res) => {
    res.send('I');
})

app.listen('8080', () => {
    console.log("Server running");
})