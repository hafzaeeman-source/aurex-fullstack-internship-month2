const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    description: { type: String, trim: true, default: "", maxlength: 500 },
    quantity: { type: Number, default: 1, min: 0 },
    category: { type: String, trim: true, default: "General", maxlength: 50 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
