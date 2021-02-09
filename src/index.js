const express = require('express');
const bodyParser = require('body-parser');

const InitMongo = require('./config/mongo-db');
InitMongo();

const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT = 5004;

app.get('/',(req,res)=>{
    res.send('Welcome to Node-Express');
});

/**
 * Router Middleware
 * Router - /api/user/*
 * Method - *
 */
app.use('/api/user', userRoutes);

app.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`);
});
