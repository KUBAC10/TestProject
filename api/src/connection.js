const mongoose = require("mongoose");

const connection = "mongodb://localhost:27017/test_task";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
