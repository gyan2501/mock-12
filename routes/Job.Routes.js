const express = require("express");
const { JobModel } = require("../model/Job.Model");

const jobRouter = express.Router();

// POST REQUEST JOB
jobRouter.post("/create", async (req, res) => {
  try {
    const job = await JobModel(req.body);
    await job.save();
    res.status(200).send({ msg: "New Job Created..!!" });
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
});

// GET REQUEST JOB
jobRouter.get("/", async (req, res) => {
  const { role, sort, search, page } = req.query;

  try {
    const filterJob = {};

    if (role) {
      filterJob.role = role;
    }

    const q = JobModel.find(filterJob);

    if (sort === "desc") {
      query.sort({ postedAt: -1 });
    } else {
      query.sort({ postedAt: 1 });
    }

    const perPage = 10;
    const currPage = +page || 1
   

  } catch (error) {
    res.status(400).send({ err: error.message });
  }
});

module.exports = {
  jobRouter,
};
