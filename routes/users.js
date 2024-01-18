const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {}
  res.json({ message: error });
});

router.get("/:id", async (req, res) => {
  try {
    const singlePost = await User.findById(req.params.id);
    res.json(singlePost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
