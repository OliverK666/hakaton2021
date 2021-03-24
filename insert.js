var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
    var db = client.db("igraonice");
	if(err == null){
		console.log("Connected to MongoDB");
		var igraonice = db.collection("igraonice");
		igraonice.insertOne({"name":"Kum"}, function(err, r) {
			if(err == null){
				console.log(r.ops);
			} else {
				console.log(err);
			}
		});
		client.close();
	} else {
		console.log("Failed to connect to MongoDB");
	}
});