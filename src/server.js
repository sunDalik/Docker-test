const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')

const server = app.listen(port, () => {
    console.log(`Node.js server is listening at port ${port}`);
});

app.use(cors())

let counter = 0;

app.get('/', (req, res) => {
    res.send(counter.toString());
});

app.get('/stat/', (req, res) => {
    counter++;
    res.send(counter.toString());
});


app.get('/about/', (req, res) => {
    res.send('<h3> Hello, sundalik</h3>');
});