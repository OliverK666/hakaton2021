var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
	var db = client.db("igraonice");
	if(err == null){
		console.log("Connected to MongoDB");
		var igraonice = db.collection("igraonice");
		igraonice.find({"name":"Kum"}).toArray(function(err, docs) {
			if(err == null){
				if(docs.length == 0)
					console.log("Ne postoji ta igraonica");
				for(i=0;i<docs.length;i++)
					console.log(docs[i]);
			} else {
				console.log(err);
			}
		});
		client.close();
	} else {
		console.log("Failed to connect to MongoDB");
	}
});