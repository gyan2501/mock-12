const express = require("express");
const { JobModel } = require("../model/Job.Model");

const jobRouter = express.Router();

// POST REQUEST JOB
jobRouter.post("/create", async (req, res) => {
  try {
    const job = await JobModel(req.body)
    await job.save()
    res.send(200).send({msg: "New Job Created..!!"})
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
});

// GET REQUEST JOB
jobRouter.get("/", async (req, res) => {
    try {
        
        

    } catch (error) {
        res.status(400).send({ err: error.message });
    }
});

module.exports = {
  jobRouter,
};
