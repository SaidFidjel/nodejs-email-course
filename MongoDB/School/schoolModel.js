const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  schoolName: String,
  city: String,
  totalStudents: Number,
  teachers: [{ firstname: String, lastname: String }],
  createdDate: { type: Date, default: Date.now },
});

const School = mongoose.model("School", schoolSchema);

module.export = School;
