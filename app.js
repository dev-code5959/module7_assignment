const express = require('express');
const app = new express();

const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const jsonwebtoken = require('jsonwebtoken');

const router = require('./src/Routes/api');

app.use(cors());
app.use(cookieParser());
app.use(expressMongoSanitize());
app.use(helmet())
app.use(hpp())


const serverLimiter = expressRateLimit({
    windowMs: 15* 60* 1000,
    limit: 100,
})
app.use(serverLimiter)




app.use(express.json());
app.use('/api/v1', router);


app.get('*', (req, res) => {
    res.status(404).send('No Page Found');
})

module.exports = app;
