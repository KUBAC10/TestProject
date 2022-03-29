const mongoose = require("mongoose");
require("dotenv").config()

//const connection = "mongodb://mongo:27017/test_task";
// const connection = `mongodb+srv://Kuba:${REACT_APP_P}@testdb.cwsja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const connection = `mongodb+srv://Kuba:${process.env.REACT_APP_PASS}@testdb.cwsja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
