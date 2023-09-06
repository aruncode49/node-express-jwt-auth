const User = require("../models/user");

async function signup_get(req, res) {
  res.render("signup");
}

async function login_get(req, res) {
  res.render("login");
}

async function signup_post(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ err: "user is not created" });
  }
}

async function login_post(req, res) {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("user login");
}

module.exports = {
  signup_get,
  signup_post,
  login_get,
  login_post,
};
