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
    collection: "test6",
    versionKey: false,
  }
);

module.exports = mongoose.model("test6", schema);
