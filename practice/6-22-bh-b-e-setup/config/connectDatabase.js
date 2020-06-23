const mongoose = require("mongoose");
const { dbUri } = require("./index.js");
module.exports = connectDatabase = async () => {
  try {
    await mongoose.connect(
      dbUri,
      { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Connected to database")
    );

  } catch (error) {
    console.error(error);
    return error;
  }
};
