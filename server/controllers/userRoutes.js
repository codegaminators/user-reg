const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET All Users

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.send({ msg: "There was an error", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.send(users);
  } catch (error) {
    console.log(error);
    res.send({ msg: "There was an error", error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send({ msg: "There was an error", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send({ msg: "There was an error", error });
  }
});

module.exports = router;
