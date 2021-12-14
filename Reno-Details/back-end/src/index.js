const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//імпорт Параметри деталі
const Details = require("./shemes/details");

const express = require("express");
const app = express();

const PORT = 3003;

//силка на мої дані
const mongoDBurl = `mongodb+srv://logos-user:logos-password@cluster0.u6epo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//надаємо дозвіл нашій front-end частині
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});


//відправляємо дані
app.post("/detail", (req, res) => {
  const detail = req.body;
  try {
    Details.create(detail);
    res.statusCode = 200;
    res.send(detail);
    console.log(detail);
  } catch (err) {
    console.log("Error");
  }
});

//отримуємо дані
app.get("/detail", async (req, res) => {
  const detail = await Details.find();
  res.send(detail);
});

app.get("/user", async (req, res) => {
  const { username } = req.query;
  const users = await Details.find({ username });
  res.statusCode = 200;
  res.send(users);
});

//підєднуємось для відслідковування даних
app.listen(PORT, async () => {
  try {
    await mongoose.connect(mongoDBurl);
  } catch (err) {
    console.log(err);
  }
  console.log("http://localhost:3003/");
});
