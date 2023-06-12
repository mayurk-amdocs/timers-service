const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    data: {
      type: Array
    },
  },
  {
    strict: true,
    collection: "test7",
    versionKey: false,
  }
);

module.exports = mongoose.model("test7", schema);
