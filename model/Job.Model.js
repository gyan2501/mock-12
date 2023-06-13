const mongoose = require("mongoose");

const JobSchema = mongoose.Schema(
  {
    company: String,
    postedAt: Date,
    city: String,
    location: String,
    role: String,
    level: String,
    contract: String,
    position: String,
    language: String,
  },
  {
    versionKey: false,
  }
);

const JobModel = mongoose.model("job", JobSchema);

module.exports = {
  JobModel,
};
