const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  // res.send("Hello");
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.json({ message: "Failed to add create user" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const singlePost = await User.findById(req.params.id);
    res.json(singlePost);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });
    console.log(deletedUser);
    res.json(deletedUser);
  } catch (e) {
    res.json({ message: e });
  }
});

router.patch("/:id", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name,
          email,
          password: hashPassword,
        },
      }
    );
    res.json(updatedUser);
    console.log(updatedUser);
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = router;
