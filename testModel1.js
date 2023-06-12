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
    collection: "test1",
    versionKey: false,
  }
);

module.exports = mongoose.model("test1", schema);
