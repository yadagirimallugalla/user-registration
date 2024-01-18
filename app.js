require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRoute = require("./routes/users");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173" }));

app.use(bodyParser.json());

app.use("/api/users", usersRoute);

mongoose.connect(process.env.mongoURI);
mongoose.connection.on("connected", () => {
  console.log("connected to DB");
});
app.listen(3000);
