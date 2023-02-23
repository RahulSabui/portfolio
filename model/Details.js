const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
    },
    univercity: {
      type: String,
    },
    description: {
        type: String,
    },
    year: {
      type: String,
    },
    order: {
        type: Number,
    },
  }
);

module.exports = mongoose.model("Education", educationSchema);
