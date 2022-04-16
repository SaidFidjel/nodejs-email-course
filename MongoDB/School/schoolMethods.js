const School = require("./schoolModel");

const createSchool = async (schoolData) => {
  const school = await School.create({ schoolData });
  return school;
};

const getSchool = async (schoolName) => {
  const school = await School.findOne({ schoolName });
  return school;
};

const getSchools = async () => {
  const schools = await School.find();
};

module.exports = {
  createSchool,
  getSchool,
  getSchools,
};
