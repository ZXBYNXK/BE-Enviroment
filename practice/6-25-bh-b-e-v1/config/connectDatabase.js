// const mongoose = require("mongoose");
const { dbUri } = require("./index.js");
// const isEmpty = require("../utils/isEmpty");
// module.exports = connectDatabase = () =>
module.exports = async () => {
  try {
    await require("mongoose").connect(
      dbUri,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
      (err) => (err ? console.error(err) : console.log("Connected to database"))
    );
  } catch (err) {
    console.error(err);
  }
};
