var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/hakaton';

MongoClient.connect(url, function(err, db) {
	if(err == null){
		console.log("Connected to MongoDB");
		db.close();
	}
});