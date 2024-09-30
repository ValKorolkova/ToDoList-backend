const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./ListRoutes');
const cors = require('cors')


require('dotenv').config();

mongoose.set('strictQuery', false);

const PORT = 8000 || process.env.port;

app.use(express.json())
app.use(cors())

app.listen (PORT, () => {
    console.log(`I AM LISTENNING ON PORT ${PORT}`)
})

mongoose
.connect(process.env.MONGODB_LINK)
.then (() => console.log('WEWERE CONNECT TO MONGODB'))
.catch ((err) => console.log(err))

app.use(routes);