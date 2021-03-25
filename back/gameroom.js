var mongoose = require("mongoose");

var gameroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    createdAt: Date,
    updatedAt: Date
}, { collection: "gamerooms" });

gameroomSchema.pre("save", function (next) {
    var currentDate = new Date();
    this.updatedAt = currentDate;
    if (!this.createdAt)
        this.createdAt = currentDate;
    next();
});

module.exports = mongoose.model("gameroom", gameroomSchema);