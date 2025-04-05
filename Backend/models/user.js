const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  selectClass: {
    type: String,
    required: true,
  },
  lastClass: {
    type: String,
    required: true,
  },
  lastSchool: {
    type: String,
    required: true,
  },
  districtName: {
    type: String,
    required: true,
  },
  stateName: {
    type: String,
    required: true,
  },
  pinCode: {
    type: number,
    required: true,
  },
});

const USER = mongoose.model('user', userSchema);

module.exports = USER;