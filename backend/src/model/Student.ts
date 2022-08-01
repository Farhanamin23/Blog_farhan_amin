const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  type: {
    type: String,
    required: [true, "Provide your type"],
    unique: true,
  },
  stock: {
    type: Number,
    required: [true, "Provide your stock"],
  },
});