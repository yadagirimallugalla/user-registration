require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRoute = require("./routes/users");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/users", usersRoute);

mongoose.connect(process.env.mongoURI);
mongoose.connection.on("connected", () => {
  console.log("connected to DB");
});
app.listen(4000);
