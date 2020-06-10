const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const authorShema = new Schema({
    name: String,
    age: Number,
});

module.exports = mongoose.model("Authors", authorShema);