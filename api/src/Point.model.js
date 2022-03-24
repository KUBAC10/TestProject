const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    x: Number,
    y: Number,
    status: Number,
});

const Point = mongoose.model("Point", userSchema);

module.exports = Point;
