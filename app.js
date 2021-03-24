var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var gameroomDetails = require("./back/gameroomDetails");
const gameroomDetails = require("./back/gameroomDetails");

var url = "mongodb://localhost:27017/hakaton2021";
mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = 3000;

var gameroomDetailsRouter = express.Router();

gameroomDetailsRouter
    .get("/:id", function(req, res, next) {
        gameroomDetails.findOne({
            "_id": req.params.id
        }).exec(function(err, entry) {
            if (err) next(err);
            res.json(entry);
        });
    })
    .get("/", function(req, res) {
        gameroomDetails.find({}, function(err, data, next) {
            res.json(data);
        });
    })
    .post("/", function(req, res, next) {
        var GameroomDetails = new gameroomDetails(req.body);
        GameroomDetails.save(function(err, entry) {
            if (err) next(err);
            res.json(entry);
        });
    })
    .put("/:id", function(req, res, next) {
        gameroomDetails.findById({
            "_id": req.params.id
        }, function(err, gameroomDetails) {
            if (err) next(err);
            gameroomDetails.set(req.body);
            gameroomDetails.save(function(err, entry) {
                if (err) next(err);
                res.json(entry);
            });
        });
    })
    .delete("/:id", function(req, res, next) {
        gameroomDetails.findOneAndRemove({
            "_id": req.params.id
        }, function(err, gameroom, successIndicator) {
            if (err) next(err);
            res.json(successIndicator);
        });
    });

app.use("/api/gameroomDetails", gameroomDetailsRouter);

app.use(function(err, req, res, next) {
    var message = err.message;
    var error = err.error || err;
    var status = err.status || 500;

    res.status(status).json({
        message: message,
        error: error
    });
});

app.listen(port);
console.log("Server is running and listening on port " + port);