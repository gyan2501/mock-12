const express = require("express");
const { connection } = require("./db");
require("dotenv").config();



const cors = require("cors");
const { jobRouter } = require("./routes/Job.Routes");

const app = express();

app.use(express.json());
app.use(cors);

app.use("/jobs", jobRouter)





app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB!");
  } catch (error) {
    console.log(error);
    console.log("Not able to connect DB!");
  }
  console.log(`Server is running on port ${process.env.port}!`);
});
