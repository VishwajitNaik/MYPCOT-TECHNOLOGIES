const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true, // You can set the default value as needed
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
