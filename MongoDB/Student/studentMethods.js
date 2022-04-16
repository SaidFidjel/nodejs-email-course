const Student = require("./student.js");

const createStudent = async (studentData) => {
  const student = await Student.create(studentData);
};

const findStudent = async (firstName) => {
  const student = await Student.findOne({ firstName });
  return student;
};

const findStudents = async () => {
  const students = await Student.find();
  return students;
};

module.exports = {
  createStudent,
  findStudent,
  findStudents,
};
