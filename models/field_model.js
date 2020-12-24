const mongoose = require("mongoose");

const fieldSchema =  mongoose.Schema({
  //TODO ****type: { type: String, ref: "field_types" },****    How does a string have a ref?
  type: { type: String },
  //title is persian name
  title: { type: String },
  //name isthe eng name
  name: { type: String },
  //TODO not sure yet
  jobs: [{ type: String }],
  //TODO not sure yet
  showIn: [
    {
      type: String,
      enum: ["add", "edit", "register"],
    },
  ],
  //TODO not sure yet
  section: {
    type: String,
    enum: ["legalCustomer", "legal", "customer", "user", "company"],
  },

  rule: {
    type: {
      type: String,
    },
    required: Boolean,
    multi: Boolean,
    max: Number,
  },

  info: {
    title: String,
  },
  //TODO their value is duplicated in other fields
  //   info: {
  //     title: "حساب های بانکی",
  //   },
  //   rule: {
  //     type: "list",
  //   },
});

const fieldModel = mongoose.model("fields", fieldSchema);
module.exports = fieldModel;