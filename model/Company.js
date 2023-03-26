const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
    },
    desgination: {
      type: String,
    },
    description: {
        type: Array,
    },
    startYear: {
      type: String,
    },
    endYear: {
        type: String,
      },
    order: {
        type: Number,
    },
  }
);

module.exports = mongoose.model("Company", companySchema);