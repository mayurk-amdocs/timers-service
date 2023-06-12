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
    collection: "test5",
    versionKey: false,
  }
);

module.exports = mongoose.model("test5", schema);
