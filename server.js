const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bpdyParser  = require('body-parser');

const app           = express();
const port          = 8000;






app.listen(port, (err) =>{
    console.log("We are live on " + port);
});

