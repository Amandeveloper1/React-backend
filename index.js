const express = require('express')
const connectToMongo = require('./db');

const app = express()
connectToMongo();
const port = 3000

app.use(express.json());

app.use('/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})