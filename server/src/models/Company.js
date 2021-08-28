const mongoose = require('mongoose');

const { COMPANY } = require('../constants/roles');

const CompanySchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: COMPANY
  },
  createdAt: {
    type: Date,
    default: Date
  }
});

module.exports = mongoose.model('Companies', CompanySchema);
