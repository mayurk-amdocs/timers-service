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
    collection: "test2",
    versionKey: false,
  }
);

module.exports = mongoose.model("test2", schema);
