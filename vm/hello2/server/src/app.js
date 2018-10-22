const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const mongo = require('mongodb')
const MongoClient = mongo.MongoClient;
const url = "mongodb://admin:justasbad@localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("hellodb");
    var myobj = { "lang" : "ru", "message": "Привет" };
    dbo.collection("messages").insertOne(myobj, function(err, res) {
	if (err) throw err;
	console.log("1 document inserted");
	db.close();
    });
});

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.set('port', process.env.PORT || 3000);
app.listen(process.env.PORT || 3000)

