const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  tableNo: {
    type: Number,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    default: "Available", // available, occupied, reserved
  },
  seats: {
    type: Number,
    required: true,
  },
  currentOrder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
});

module.exports = mongoose.model("Table", tableSchema);
