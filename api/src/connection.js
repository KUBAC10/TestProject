const mongoose = require("mongoose");

//const connection = "mongodb://mongo:27017/test_task";
const connection = "mongodb+srv://Kuba:Kuba10@testdb.cwsja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
