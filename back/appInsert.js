var mongoose = require("mongoose");

var url = "mongodb://localhost:27017/hakaton2021";
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false});
console.log("Connected correctly to server");

var gameroomDetails = require("./back/gameroomDetails");

var g = new gameroomDetails({
    name: "Kum",
    description: "Najbolja igraonica"
});

g.save(function(err) {
    if(err == null) {
        console.log(g);
    } else {
        console.log(err);
    }
    mongoose.connection.close();
})