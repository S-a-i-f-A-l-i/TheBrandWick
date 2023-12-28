const cors = require("cors");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");

// db and authenticateUser
const connectDB = require("./db/connect");

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});
app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.get("*", (request, response) => {
  response.json({ msg: "Sorry route doesn't exist" });
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
